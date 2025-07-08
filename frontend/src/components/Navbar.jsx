import { Link, useNavigate } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import useAuth from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  console.log(user)
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            ThinkBoard
          </h1>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="greeting">Hello, <strong>{user.user.username}</strong></span>
              <button onClick={handleLogout} className="btn btn-ghost">
                Logout
              </button>
              <Link to={"/create"} className="btn btn-primary">
                <PlusIcon className="size-5" />
                <span>New Note</span>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn">
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
