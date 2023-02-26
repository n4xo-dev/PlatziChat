import bodyParser from 'body-parser';
import express from 'express';

const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', (req, res) => {
  res.send('Messages list');
})

router.post('/message', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send('Message added');
})



app.listen(3000, () => console.log('App listening on port 3000...'));
