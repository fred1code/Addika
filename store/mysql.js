const mysql = require("mysql");
const config = require("../config");

const dbconf = {
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};
//conect
let connection;
function handleCon() {
  connection = mysql.createConnection(dbconf);

  connection.connect((err) => {
    if (err) {
      console.error("[db err]", err);
      setTimeout(handleCon, 2000);
    } else {
      console.log("DB Connected");
    }
  });

  connection.on("error", (err) => {
    console.error("[db err]", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleCon();
    } else {
      throw err;
    }
  });
}

handleCon();

function list(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function get(table, id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id = ${id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function post(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} (name, title, completed) VALUES('${data.name}', '${data.title}', 1); `, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}
function put(table, data, id) {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE ${table} SET name = '${data.name}', title = '${data.title}', completed = ${data.compled}  WHERE id = ${id}; `, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function patch(table, data, id) {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE ${table} SET completed = '${data.compled}' WHERE id = ${id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}
function delet(table, id) {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM ${table} WHERE id = ${id} ;`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

module.exports = {
  list,
  get,
  post,
  put,
  patch,
  delet,
};
