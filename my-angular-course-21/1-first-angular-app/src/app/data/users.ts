export type UserType = {
  id: string;
  name: string;
  avatar: string;
};

export const users: UserType[] = [
  {
    id: 'user-1',
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 'user-2',
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 'user-3',
    name: 'Alice Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 'user-4',
    name: 'Bob Brown',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
];
