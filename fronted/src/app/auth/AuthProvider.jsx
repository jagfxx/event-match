"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = no autenticado
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Al montar, chequeamos si hay token en localStorage
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      // opcional: decodificar token para obtener email/nombre
      setUser({ token, ...JSON.parse(userData) });
    }
    setLoading(false);
  }, []);

  const signIn = (token, userData = null) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData ? { ...userData, token } : { token });
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
