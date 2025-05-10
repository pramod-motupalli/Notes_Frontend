function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-6">
            <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
            <p className="text-2xl font-semibold mb-4">Oops! Page not found.</p>
            <p className="text-lg text-gray-400 text-center mb-6">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <a
                href="/"
                className="inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Go Back Home
            </a>
        </div>
    );
}

export default NotFound;
