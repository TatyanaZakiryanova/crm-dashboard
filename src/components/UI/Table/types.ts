export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
  };
  phone: string;
}

export interface TableRow {
  [key: string]: string;
  id: string;
  name: string;
  username: string;
  email: string;
  company: string;
  phone: string;
}
