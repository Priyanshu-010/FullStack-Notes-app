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
    console.log(email, password);
    try {
      const res = await axiosInstance.post("/auth/login", { email, password });
      login(res.data);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.log("error in login", error);
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
