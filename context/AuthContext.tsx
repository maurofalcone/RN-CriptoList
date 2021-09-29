import React, { createContext, FC, useState } from "react";
import { IAuthContext } from "../types/Context";
import * as SecureStore from "expo-secure-store";
import { IUser } from "../types/User";

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthContextProvider: FC = ({ children }) => {
  const [loggedInUser, setUser] = useState("");
  const login = async (params: IUser) => {
    try {
      setUser(params.username);
      await SecureStore.setItemAsync(params.username, params.password);
      // fake login request
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 500);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
