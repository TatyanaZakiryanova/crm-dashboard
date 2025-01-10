import { TableRow, User } from './types';

export const formatDataForTable = (data: User[]): TableRow[] => {
  return data.map((user: User) => ({
    id: String(user.id),
    name: user.name,
    username: user.username,
    email: user.email,
    company: user.company.name,
    phone: user.phone,
  }));
};

//сортировка в дропдауне
export const sortUsers = (users: TableRow[], option: string) => {
  switch (option) {
    case 'newest':
      return [...users].sort((a, b) => Number(b.id) - Number(a.id));
    case 'oldest':
      return [...users].sort((a, b) => Number(a.id) - Number(b.id));
    default:
      return users;
  }
};

//поиск в таблице
export const filterUsers = (users: TableRow[], searchValue: string): TableRow[] => {
  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.email.toLowerCase().includes(searchValue.toLowerCase()),
  );
};

//сортировка по столбцам
export const sortTableData = (
  data: TableRow[],
  column: keyof TableRow,
  direction: 'asc' | 'desc',
): TableRow[] => {
  return [...data].sort((a, b) => {
    if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
    if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};
