const stringify = value => JSON.stringify(value);
const toJSON = string => JSON.parse(string);

const storage = {
  set: (key, value) => {
    localStorage.setItem(key, stringify(value));
  },
  get: key => {
    const val = localStorage.getItem(key);
    return toJSON(val);
  },
  has: key => localStorage.getItem(key) !== null,
};

export default storage;