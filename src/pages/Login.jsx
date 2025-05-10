import Form from "../components/Form";

function Login() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 py-6">
            <div className="w-full max-w-md bg-gray-800 text-white shadow-lg rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-center text-indigo-400 mb-8">
                    Login
                </h2>
                <Form route="/api/token/" method="login" />
            </div>
        </div>
    );
}

export default Login;
