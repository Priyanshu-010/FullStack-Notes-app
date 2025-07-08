import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
  const [user, setUser] = useState(()=>{
    const stored = localStorage.getItem("user");
    
  });
}