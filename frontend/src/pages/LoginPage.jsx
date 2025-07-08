import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios.js";
import useAuth from "../context/AuthContext.jsx";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar.jsx";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", { email, password });
      login(res.data);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Welcome Back
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-gray-700 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full bg-gray-700 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary w-full bg-gradient-to-r from-green-500 to-blue-600 border-none hover:from-green-600 hover:to-blue-700"
            >
              Login
            </button>
            
            <div className="text-center mt-4">
              <span className="text-gray-400">Don't have an account? </span>
              <Link to="/register" className="text-blue-400 hover:text-blue-300">
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;