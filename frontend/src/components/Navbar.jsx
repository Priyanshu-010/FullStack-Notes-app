import { Link, useNavigate } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import useAuth from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-gray-900 border-b border-gray-700">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-mono tracking-tight">
            ThinkBoard
          </h1>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-300">
                Hello, <strong className="text-blue-400">{user.user.username}</strong>
              </span>
              
              <Link 
                to={"/create"} 
                className="btn bg-gradient-to-r from-green-500 to-blue-600 border-none text-white hover:from-green-600 hover:to-blue-700"
              >
                <PlusIcon className="size-5" />
                <span>New Note</span>
              </Link>
              <button 
                onClick={handleLogout} 
                className="btn btn-ghost text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link 
                to="/login" 
                className="btn bg-gradient-to-r from-green-500 to-blue-600 border-none text-white hover:from-green-600 hover:to-blue-700"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="btn bg-gradient-to-r from-green-500 to-blue-600 border-none text-white hover:from-green-600 hover:to-blue-700"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;