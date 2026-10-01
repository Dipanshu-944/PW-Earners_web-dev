function fun1() {
  return Promise.resolve("fun1");
}
function fun2() {
  return Promise.reject("fun2");
}
function fun3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fun3");
    }, 500);
  });
}

// promise.all give all data or nothing. this execute parallely
// let res = Promise.all([fun1(), fun2(), fun3()]);

// promise.allSettled give all settled with value
// let res = Promise.allSettled([fun1(), fun2(), fun3()]);

// promise.race will return only which finish first 
// let res = Promise.race([fun2(), fun1(), fun3()]);

// promise.any give first settled output
let res = Promise.any([fun1(), fun2(), fun3()]);


res
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
