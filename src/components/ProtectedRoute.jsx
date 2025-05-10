import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";

function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem(ACCESS_TOKEN);
            if (!token) return setIsAuthorized(false);

            try {
                const { exp } = jwtDecode(token);
                const now = Date.now() / 1000;

                if (exp < now) {
                    await refreshToken();
                } else {
                    setIsAuthorized(true);
                }
            } catch (error) {
                console.error("Invalid token:", error);
                setIsAuthorized(false);
            }
        };

        const refreshToken = async () => {
            const refresh = localStorage.getItem(REFRESH_TOKEN);
            if (!refresh) return setIsAuthorized(false);

            try {
                const res = await api.post("/api/token/refresh/", { refresh });
                if (res.status === 200) {
                    localStorage.setItem(ACCESS_TOKEN, res.data.access);
                    setIsAuthorized(true);
                } else {
                    setIsAuthorized(false);
                }
            } catch (error) {
                console.error("Token refresh failed:", error);
                setIsAuthorized(false);
            }
        };

        checkAuth();
    }, []);

    if (isAuthorized === null) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-6 h-6 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return isAuthorized ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
