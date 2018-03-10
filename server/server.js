import express from 'express';
import {s3Service} from "./s3Service";
import {PORT} from "./config";

const app = express();

app.use('/s3', s3Service);
app.use('/static', express.static('dist'));

app.listen(PORT, () => console.info('Start listen on:', PORT));

export default app;