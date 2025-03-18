"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left side login form */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-white">
        <h1 className="text-3xl font-bold mb-4">Sign in</h1>
        <p className="text-gray-600 mb-4">
          If you don’t have an account register{" "}
          <a href="/register" className="text-blue-600 font-semibold">
            Register here!
          </a>
        </p>

        {/* Email */}
        <div className="flex items-center border-b border-gray-300 py-2 mb-4">
          <span className="text-gray-400 mr-2">📧</span>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-2 py-1 focus:outline-none"
          />
        </div>

        {/* Password - with eye icon toggle */}
        <div className="flex items-center border-b border-gray-300 py-2 mb-4">
          <span className="text-gray-400 mr-2">🔒</span>
          <input
            type={showPassword ? "text" : "password"} // Toggle password visibility
            placeholder="Enter your Password"
            className="w-full px-2 py-1 focus:outline-none"
          />
          <span
            className="text-gray-500 cursor-pointer select-none ml-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "👁️" : "🙈"} {/* Toggle eye icon */}
          </span>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between text-sm text-gray-600 mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="/forgot-password" className="text-blue-600">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-900 text-white py-3 rounded-lg mt-6 hover:bg-blue-800">
          Login
        </button>

        {/* Admin Login Button */}
        <button className="w-full text-gray-500 py-2 mt-2">Admin Login</button>
      </div>

      {/* Right side image section */}
      <div className="w-1/2 flex items-center justify-center bg-blue-900 relative">
    <img src="/1.png" alt="Illustration" className="w-full h-full object-cover" />

    {/* ✅ 这里的 "Sign in" 文字不会被图片遮挡 */}
    <h2 className="absolute bottom-10 text-3xl font-bold text-white z-10">Sign in</h2>
  </div>
    </div>
  );
}
