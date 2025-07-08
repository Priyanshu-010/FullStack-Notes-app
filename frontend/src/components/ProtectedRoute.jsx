// import { useEffect } from "react";
import useAuth from "../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { user } = useAuth();
  // const navigate = useNavigate();
  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectRoute;
