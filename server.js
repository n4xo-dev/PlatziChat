import bodyParser from 'body-parser';
import express from 'express';
import { router } from './network/routes.js';
import * as db from './db.js';

db.connect('mongodb+srv://n4xo:9808@fcc-mongo-ilopezosa.zmzkq0a.mongodb.net/?retryWrites=true&w=majority');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app)

app.use('/app', express.static('public'));

app.listen(3000, () => console.log('App listening on port 3000...'));