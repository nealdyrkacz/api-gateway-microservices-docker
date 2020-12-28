export interface CreateUser {
  identityId: string;
  firstName: string;
  lastName: string;
}

export interface UserUpdate {
  id: string;
  identityId: string;
  firstName: string;
  lastName: string;
}

export interface ADTO {
  id: string;
  data: {};
  createdAt: Date;
  updatedAt: Date;
}
