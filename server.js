import express from 'express';

const router = express.Router();
const app = express();

app.use(router);

router.get('/message', (req, res) => {
  res.send('Messages list');
})

router.post('/message', (req, res) => {
  res.send('Message added');
})

// app.use('/', (req, res) => {
//   console.group('Root');
//   res.send('Hi!');
//   console.groupEnd('Root');
// })

app.listen(3000, () => console.log('App listening on port 3000...'));
