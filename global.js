// console.log(global);

global.setTimeout(() => {
  console.log("this is the end");
  clearInterval(int);
}, 5000);

const int = setInterval(() => {
  console.log("testing the interval");
}, 1000);

console.log(__dirname);
console.log(__filename);
