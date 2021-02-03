const db = {
    'user': [
        { id: '1', name: 'alfredo' },
        { id: '2', name: 'robles' },
    ],
  };

async function list(tabla) {
  return db[tabla];
};

async function get(tabla, id) {
    const col = await list(tabla);
    return col.filter(items => items.id===id)[0] || null;
};

async function upsert(tabla, data) {
  db[collection].push(data);
};

 async function remove(tabla,id) {

  return true;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
};
