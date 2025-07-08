import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
  const [user, setUser] = useState(()=>{
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null
  });

  const login = (userData) =>{
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  const logout = ()=>{
    setUser(null);
    localStorage.removeItem("user");
  }

  return(
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = ()=> useContext(AuthContext);
export default useAuth