import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('realm_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (username, password) => {
    // Simple authentication check
    const correctUsername = 'TheMenOfLetters';
    const correctPassword = 'SamYeYiming@9';
    
    if (username === correctUsername && password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('realm_authenticated', 'true');
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('realm_authenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
