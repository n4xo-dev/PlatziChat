import bodyParser from 'body-parser';
import express from 'express';
import * as response from './network/response.js'

const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', (req, res) => {
  console.log(req.headers);
  res.header({
    'custom-header': 'Custom value',
  });
  response.success(req, res, 'Message list');
})

router.post('/message', (req, res) => {
  console.log(req.query);
  if (req.query.error)
    response.error(req, res, 'ERROR');
  else
    response.success(req, res, 'Message added', 201);
});


app.use('/app', express.static('public'));


app.listen(3000, () => console.log('App listening on port 3000...'));
