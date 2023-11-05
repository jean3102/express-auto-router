import { Router } from 'express';

const customers = Router();

customers.get('/', (req, res) => {
	res.send('customers');
});

export default customers;
