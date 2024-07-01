import bcrypt from 'bcrypt';

export const userSeed = [
  {
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('password', 10),
    firstName: 'Administrator',
    lastName: '',
  },
  {
    email: 'user1@gmail.com',
    password: bcrypt.hashSync('password', 10),
    firstName: 'user1',
    lastName: 'user1',
  },
  {
    email: 'user2@gmail.com',
    password: bcrypt.hashSync('password', 10),
    firstName: 'user2',
    lastName: 'user2',
  },
  {
    email: 'user3@gmail.com',
    password: bcrypt.hashSync('password', 10),
    firstName: 'user3',
    lastName: 'user3',
  },
  {
    email: 'user4@gmail.com',
    password: bcrypt.hashSync('password', 10),
    firstName: 'user4',
    lastName: 'user4',
  },
  {
    email: 'user5@gmail.com',
    password: bcrypt.hashSync('password', 10),
    firstName: 'user5',
    lastName: 'user5',
  },
];
