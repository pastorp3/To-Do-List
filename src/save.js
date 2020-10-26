const save = (obj) => {
  localStorage.library = JSON.stringify(obj);
  localStorage.setItem('counter', '1');
};

export default save;
