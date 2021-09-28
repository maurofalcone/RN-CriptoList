import React from "react";
import { IUser } from "./User";

export interface IAuthContext {
  saveLoggedInUser: (params: IUser) => Promise<void>;
  loggedInUser: string;
}
