import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { Server } from 'node:http';
import { router } from './network/routes.js';
import * as db from './db.js';
import * as wss from './socket.js';

db.connect('mongodb+srv://n4xo:9808@fcc-mongo-ilopezosa.zmzkq0a.mongodb.net/?retryWrites=true&w=majority');

const app = express();
const server = Server(app);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app)

app.use('/app', express.static('public'));

server.listen(3000, () => console.log('App listening on port 3000...'));
wss.connect(server);