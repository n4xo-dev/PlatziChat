import fs from 'fs';

const list = [];

(async function loadDB() {
  await fs.readFile('../../store.txt', (err, data) => {
    if (err)
      return;

    const dataString = data.toString();
    const parsedData = JSON.parse(dataString);
    parsedData.forEach( msg => list.push(msg) );
  })
})();

function addMessage(message) {
  list.push(message);
}

function getMessages() {
  return list;
}

function persist() {
  fs.writeFileSync('../../store.txt', JSON.stringify(list, null, 2));
}

export {
  addMessage as add,
  getMessages as list,
  // get
  // update
  // delete
  persist,
}