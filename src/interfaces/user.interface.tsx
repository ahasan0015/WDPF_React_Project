export interface User {
  id: number,
  role_id?: number,
  name: string,
  email: string,
  password: string,
  phone?: string,
  createdAt: string,
}

const userDefault: User = {
  id: 0,
  role_id: 0,
  name: "",
  email: "",
  password: "",
  phone: "",
  createdAt: "",
};

export default userDefault;
