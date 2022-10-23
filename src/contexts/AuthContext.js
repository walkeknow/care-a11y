import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({
  user: {},
  updateUser: () => {},
  expired: null,
  updateExpired: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [expired, setExpired] = useState(null);

  console.log('User', user)

  const value = {
    user: user,
    updateUser: (usr) => {
      console.log("auth context: ", usr)
      return setUser({...usr})
    },
    expired: expired,
    updateExpired: (func) => setExpired(func),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
