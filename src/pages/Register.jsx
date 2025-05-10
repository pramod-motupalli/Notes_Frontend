import Form from "../components/Form";

function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-4 py-6">
            <div className="w-full max-w-md bg-black shadow-xl rounded-lg p-8">
                <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
                    Create an Account
                </h2>
                <Form route="/api/user/register/" method="register" />
            </div>
        </div>
    );
}

export default Register;
