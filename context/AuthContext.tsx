import React, { createContext, FC, useState } from "react";
import { IAuthContext } from "../types/Context";
import * as SecureStore from "expo-secure-store";
import { IUser } from "../types/User";

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthContextProvider: FC = ({ children }) => {
  const [loggedInUser, setUser] = useState("");
  const saveLoggedInUser = async (params: IUser) => {
    setUser(params.username);
    await SecureStore.setItemAsync(params.username, params.password);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        saveLoggedInUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
