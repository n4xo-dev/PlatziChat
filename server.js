import bodyParser from 'body-parser';
import express from 'express';
import { router } from './network/routes.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app)

app.use('/app', express.static('public'));

app.listen(3000, () => console.log('App listening on port 3000...'));