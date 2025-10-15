export interface User {
  user_id: number,
  roleId?: number,
  name: string,
  email: string,
  password: string,
  phone?: string,
  createdAt: string,
}

const userDefault: User = {
  user_id: 0,
  roleId: 0,
  name: "",
  email: "",
  password: "",
  phone: "",
  createdAt: "",
};

export default userDefault;
