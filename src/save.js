const save = (obj) => {
  localStorage['library'] = JSON.stringify(obj);
  console.log(obj);
}
export default save;
