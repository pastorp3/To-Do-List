const save = (obj) => {
  localStorage.library = JSON.stringify(obj);
  localStorage.setItem('counter', '1');
  return true;
};

export default save;
