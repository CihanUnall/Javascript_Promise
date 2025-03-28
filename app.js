// let check = false;

// const promise1 = new Promise((resolve, reject) => {
//   if (check) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });
// console.log(promise1);

let check = true;

function promise1() {
  return new Promise((resolve, reject) => {
    if (check) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });
}

promise1()
  .then((res) => {
    // then yakalıyor ve resolve durumunda çalışıyor
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finaly(() => console.log("Finally"));
// finally her durumda çalışır
// then ve catch birlikte kullanılmaz.
