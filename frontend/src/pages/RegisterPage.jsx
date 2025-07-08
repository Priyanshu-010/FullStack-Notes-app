import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../utils/axios.js";
import Navbar from "../components/Navbar.jsx";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/auth/signup", { username, email, password });
      toast.success("Registered successfully. Please login");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Create Account
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300 text-sm sm:text-base">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="input input-bordered w-full bg-gray-700 text-white border-gray-600 text-sm sm:text-base"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300 text-sm sm:text-base">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-gray-700 text-white border-gray-600 text-sm sm:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300 text-sm sm:text-base">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full bg-gray-700 text-white border-gray-600 text-sm sm:text-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn w-full bg-gradient-to-r from-green-500 to-blue-600 border-none text-white hover:from-green-600 hover:to-blue-700 text-sm sm:text-base"
            >
              Register
            </button>
            
            <div className="text-center mt-4 sm:mt-6">
              <span className="text-gray-400 text-sm sm:text-base">Already have an account? </span>
              <Link to="/login" className="text-blue-400 hover:text-blue-300 text-sm sm:text-base">
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;