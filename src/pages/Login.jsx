import React, { useState } from "react";
import AuthCard from "../components/AuthCard";
import GoogleButton from "../components/GoogleButton";

export default function Login({ onNavigate = () => {} }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSignIn(e) {
    e.preventDefault();
    alert(`Signing in with ${email || "<empty>"}`);
  }

  return (
    <AuthCard>
      <h2 className="text-xl font-semibold mb-1">Login to your account</h2>
      <p className="text-sm text-gray-400 mb-4">
        Welcome back — sign in to continue.
      </p>

      <GoogleButton onClick={() => alert("Continue with Google (demo)")}>
        Continue with Google
      </GoogleButton>

      {/* Divider */}
      <div className="flex items-center my-4 gap-3">
        <span className="flex-1 h-px bg-gray-700" />
        <span className="text-xs text-gray-500">OR</span>
        <span className="flex-1 h-px bg-gray-700" />
      </div>

      <form onSubmit={handleSignIn} className="space-y-3">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">
            Email Address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 bg-cardDark rounded-md text-gray-100 placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-0"
            placeholder="you@example.com"
            type="email"
            required
          />
        </div>

        <div>
          <label className="text-xs text-gray-400 mb-1 block">Password</label>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-cardDark rounded-md text-gray-100 placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-0"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-200"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-indigo-600" />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            onClick={() => alert("Forgot Password ")}
            className="underline hover:text-gray-200"
          >
            Forgot Password?
          </button>
        </div>

        {/* Sign in button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold hover:opacity-90 transition"
          >
            Sign in
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-4 text-sm text-gray-400 text-center">
        Don’t have an account yet?{" "}
        <button
          onClick={() => onNavigate("register")}
          className="underline hover:text-gray-200"
        >
          Register
        </button>
      </div>
    </AuthCard>
  );
}
