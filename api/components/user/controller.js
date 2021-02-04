const bodyParser = require("body-parser");
const nanoid = require("nanoid");

const TABLA = "user";

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }

  function list() {
    return store.list(TABLA);
  }

  function get(id) {
    return store.get(TABLA, id);
  }

  function post(body) {
   let json= JSON.parse(body);
    const data = {
      name: json.name,
      title: json.title,
    };
    return store.post(TABLA, data);
  }

  function put(body, id) {
   let json= JSON.parse(body);
    const data = {
      name: json.name,
      title: json.title,
      compled: json.compled,

    };
    return store.put(TABLA, data,id);
  }


  function patch(body, id) {
    console.log(body);
    console.log(id);
   let json= JSON.parse(body);
    const data = {   
      compled: json.compled,

    };
    return store.put(TABLA, data,id);
  }






  function remove(id) {
    return store.remove(TABLA, id);
  }

  return {
    list,
    get,
    post,
    put,
    patch,
  };
};
