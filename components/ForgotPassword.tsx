"use client";

import { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Reset link sent to: ${email}`);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 bg-transparent">Forgot Password</h2>
                <p className="text-gray-700 text-center mb-4 bg-transparent">
                    Reset your password by providing your account email below.
                </p>

                <form onSubmit={handleSubmit} className="bg-transparent">
                    <label className="block text-sm font-medium text-gray-800 bg-transparent">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring focus:border-blue-300 bg-white text-gray-900 placeholder-gray-500"
                        placeholder="Enter your email"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white mt-4 py-2 rounded hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
