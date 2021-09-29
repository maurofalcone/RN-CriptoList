import { IUser } from "./User";

export interface IAuthContext {
  login: (params: IUser) => Promise<unknown>;
  loggedInUser: string;
}
