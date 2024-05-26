export interface User {
  id: number;
  name: string;
  avatar: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe', avatar: 'avatar1.jpg' },
  { id: 2, name: 'Jane Smith', avatar: 'avatar2.jpg' },
  { id: 3, name: 'Mike Johnson', avatar: 'avatar3.jpg' },
  { id: 4, name: 'Sarah Williams', avatar: 'avatar4.jpg' },
  { id: 5, name: 'David Brown', avatar: 'avatar5.jpg' },
  { id: 6, name: 'Emily Davis', avatar: 'avatar6.jpg' },
  { id: 7, name: 'Daniel Wilson', avatar: 'avatar7.jpg' },
  { id: 8, name: 'Olivia Taylor', avatar: 'avatar8.jpg' },
  { id: 9, name: 'Matthew Anderson', avatar: 'avatar9.jpg' },
  { id: 10, name: 'Sophia Martinez', avatar: 'avatar10.jpg' },
];

export default users;
