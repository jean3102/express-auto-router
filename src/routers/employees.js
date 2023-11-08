import { Router } from 'express';

const employees = Router();

employees.get('/', (req, res) => {
  res.send('employees');
});

export default employees;
