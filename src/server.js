import express from 'express';
import routers from './routers/index.js';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/', routers);

app.listen(PORT, () => {
	console.log('listening on port ' + PORT + '...');
});
