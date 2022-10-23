import { useState, createContext } from "react";

export const AuthContext = createContext({
  user: {},
  updateUser: () => {},
  expired: null,
  updateExpired: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [expired, setExpired] = useState(null);

  const value = {
    user: user,
    updateUser: (usr) => setUser(usr),
    expired: expired,
    updateExpired: (func) => setExpired(func),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
