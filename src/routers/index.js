import { Router } from 'express';
import { readdir } from 'fs/promises';
import { extname, basename } from 'path';

const router = Router();

const getFiles = await readdir('src/routers/');
for (const file of getFiles) {
	const fileName = basename(file, extname(file));
	if (fileName !== 'index') {
		import(`./${file}`).then((res) => {
			const { default: dynamicFile } = res;
			router.use(`/${fileName}`, dynamicFile);
		});
	}
}

export default router;
