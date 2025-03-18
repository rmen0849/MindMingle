"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert("Password has been reset successfully!");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">

                <h2 className="text-2xl font-bold mb-2 text-center text-gray-900 bg-white">Reset Your Password</h2>
                <p className="text-gray-700 text-center mb-4 bg-white">
                    Strong passwords include numbers, letters, and punctuation marks.
                </p>

                <form onSubmit={handleSubmit} className="bg-white">

                    <div className="mb-4 relative bg-white">
                        <label className="block text-sm font-medium text-gray-800 bg-white">Enter new password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring focus:border-blue-300 bg-white text-gray-900 placeholder-gray-500"
                            placeholder="Enter new password"
                            required
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-8 text-gray-600 bg-transparent hover:bg-transparent focus:bg-transparent border-none shadow-none outline-none"
                            style={{ background: "none", boxShadow: "none", border: "none" }}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <div className="mb-4 relative bg-white">
                        <label className="block text-sm font-medium text-gray-800 bg-white">Confirm new password</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring focus:border-blue-300 bg-white text-gray-900 placeholder-gray-500"
                            placeholder="Confirm new password"
                            required
                        />

                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-8 text-gray-600 bg-transparent hover:bg-transparent focus:bg-transparent border-none shadow-none outline-none"
                            style={{ background: "none", boxShadow: "none", border: "none" }}
                        >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white mt-4 py-2 rounded hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
