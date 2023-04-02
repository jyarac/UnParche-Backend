export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IPayloadJWT {
  id: string;
  username: string;
}
