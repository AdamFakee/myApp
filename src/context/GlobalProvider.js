import { useNavigation } from "@react-navigation/native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { asyncStorageService } from "../service/asyncStorage.service";


const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  // const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await asyncStorageService.getObjectData('token');
        if(token) {
          setIsLogged(true);
          setToken(token)
        }
      } catch (error) {
        console.error('Lỗi khi lấy token:', error.message);
      }
      setLoading(false);
    };

    fetchToken();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        loading,
        setToken,
        token,
        isLogged,
        setIsLogged,
        setLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
