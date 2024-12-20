import { useNavigation } from "@react-navigation/native";
import React, { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  // const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  // useEffect(() => {
  //   if(!token) {
  //     navigation.reset({
  //       index: 0,
  //       routes: [
  //         {
  //           name: 'login',
  //         },
  //       ],
  //     });
  //   }
  // })

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        loading,
        setToken,
        token
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
