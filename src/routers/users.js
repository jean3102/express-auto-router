import { Router } from 'express';

const users = Router();

users.get('/', (req, res) => {
  res.send('users');
});

export default users;
