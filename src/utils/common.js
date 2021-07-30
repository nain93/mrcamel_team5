export const getLocalStorge = (key) => {
  return JSON.parse(window.localStorage.getItem(key));
};

export const setLocalStorage = (key, input) => {
  window.localStorage.setItem(key, JSON.stringify(input));
};
