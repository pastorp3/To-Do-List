const save = (obj) => {
  localStorage['library'] = JSON.stringify(obj);
  localStorage.setItem('counter','1');
  console.log(obj);
}
export default save;
