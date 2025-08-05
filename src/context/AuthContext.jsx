// --- src/context/AuthContext.jsx ---
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

// AuthProvider wraps your app and provides auth state (user, login, logout)
export function AuthProvider({ children }) {
  const [user, setUser] = useState('');

  // On component mount, check localStorage for an existing user
  useEffect(() => {
    const storedUser = localStorage.getItem('sv_user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Save user login info to localStorage
  const login = (username) => {
    if (!username.trim()) return;
    localStorage.setItem('sv_user', username);
    setUser(username);
  };

  // Clear user session
  const logout = () => {
    localStorage.removeItem('sv_user');
    setUser('');
    window.location.href = '/'; // force redirect
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
