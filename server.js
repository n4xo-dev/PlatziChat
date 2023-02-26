import express from 'express';

const app = express();

app.use('/', (req, res) => {
  console.group('Root');
  res.send('Hi!');
  console.groupEnd('Root');
})

app.listen(3000, () => console.log('App listening on port 3000...'));
