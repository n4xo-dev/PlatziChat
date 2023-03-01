import fs from 'fs';

const list = [];

(async function loadDB() {
  await fs.readFile('../../store.txt', (err, data) => {
    console.group('Load DB');
    
    if (err)
      return;

    const dataString = data.toString();
    console.log(dataString);
    const parsedData = JSON.parse(dataString);
    console.log(parsedData);
    
    parsedData.forEach( msg => list.push(msg) );
    console.log(list);
    
    console.groupEnd('Load DB');
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