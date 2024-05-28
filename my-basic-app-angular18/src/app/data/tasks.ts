export interface Task {
  id: string;
  userId: number;
  title: string;
  summary: string;
  dueDate: string;
}

const tasks: Task[] = [
  {
    id: 't1',
    userId: 1,
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 2,
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 3,
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
  {
    id: 't4',
    userId: 1,
    title: 'Implement authentication',
    summary: 'Implement user authentication functionality in the application',
    dueDate: '2024-07-31',
  },
  {
    id: 't5',
    userId: 2,
    title: 'Optimize performance',
    summary: 'Identify and optimize performance bottlenecks in the application',
    dueDate: '2024-08-15',
  },
  {
    id: 't6',
    userId: 3,
    title: 'Write unit tests',
    summary:
      'Write comprehensive unit tests for critical application components',
    dueDate: '2024-09-30',
  },
];

export default tasks;
