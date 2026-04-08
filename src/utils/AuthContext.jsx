/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import { account } from "../appwrite/appwriteConfig";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // setLoading(false);
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      try {
        await account.createEmailSession(
          userInfo.email,
          userInfo.password
        );
      } catch (err) {
        // If session is already active, we don't throw, just proceed to get details
        if (err.code !== 401 && err.type !== 'user_session_already_exists') {
          throw err;
        }
      }
      let accountDetails = await account.get();
      console.log("Account Details: ", accountDetails);
      setUser(accountDetails);
    } catch (err) {
      console.error("Login failed:", err);
    }

    setLoading(false);
  };

  const logoutUser = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
      // Even if session deletion fails on server, we clear local state
      setUser(null);
    }
  };

  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name
      );
      
      try {
        await account.createEmailSession(userInfo.email, userInfo.password);
      } catch (err) {
        if (err.code !== 401 && err.type !== 'user_session_already_exists') {
          throw err;
        }
      }

      let accountDetails = await account.get();
      setUser(accountDetails);
      navigate("/");
    } catch (err) {
      console.error("Registration failed:", err);
    }
    setLoading(false);
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();

      setUser(accountDetails);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };
  

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
