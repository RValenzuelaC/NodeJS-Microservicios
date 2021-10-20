const { text } = require("body-parser");

const TABLE = "post";

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }

  function list() {
    return store.list(TABLE);
  }
  function get(id) {
    return store.get(TABLE, id);
  }
  function upsert(id, user, text) {
    const newPost = {
      id: id,
      user: user,
      text: text,
    };
    return store.upsert(TABLE, newPost);
  }

  return {
    list,
    get,
    upsert,
  };
};
