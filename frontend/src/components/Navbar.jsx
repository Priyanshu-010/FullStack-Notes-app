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
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            ThinkBoard
          </h1>
          
          {user ? (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span className="text-sm sm:text-base text-gray-300 whitespace-nowrap">
                Hello, <strong className="text-blue-400">{user.user.username}</strong>
              </span>
              <button 
                onClick={handleLogout} 
                className="btn btn-ghost text-xs sm:text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 px-2 sm:px-4"
              >
                Logout
              </button>
              <Link 
                to={"/create"} 
                className="btn text-xs sm:text-sm bg-gradient-to-r from-green-500 to-blue-600 border-none text-white hover:from-green-600 hover:to-blue-700 px-3 sm:px-4"
              >
                <PlusIcon className="size-4 sm:size-5" />
                <span className="hidden xs:inline">New Note</span>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-4">
              <Link 
                to="/login" 
                className="btn text-xs sm:text-sm bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-white px-3 sm:px-4"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="btn text-xs sm:text-sm bg-gradient-to-r from-green-500 to-blue-600 border-none text-white hover:from-green-600 hover:to-blue-700 px-3 sm:px-4"
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