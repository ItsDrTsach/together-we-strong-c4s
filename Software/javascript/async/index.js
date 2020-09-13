/** @format */

// function example(){
//     setTimeout(()=>{
//         console.log('We are on Example fn');
//     }, 2000);
// }
// example();
// const axios = require('axios');

let myProfile = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (resolve()) {
      resolve();
    } else {
      reject();
    }
  }, 10000);
});

let otherProfile = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve({ email: "asdf@asdf.fe" });
    } else {
      reject("Too short");
    }
  }, 2000);
});

Promise.all([myProfile, otherProfile])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });

function login(email, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pass.length > 6) {
        resolve({ email: email, password: pass });
      } else {
        reject("Too short");
      }
    }, 2000);
  });
}

async function getUser() {
  try {
    const user = await login("asdf@sdf.fef", "1234567");
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

getUser();

// login('asdf@fdf.ff','f43hwy5h5y')
// .then(user => {
// }).catch(err => {
//     console.log(err);
// });

// axios.get('localhost:3001/users')
//   .then(function (response) {
//     // handle success
//     // console.log(response.data);
//     onSuccess(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     // console.log(error);
//     onFailure(error);
//   });

// function login(email, password, onSuccess, onFailure){
//     setTimeout(()=>{
//         if(password.length > 6) {
//             onSuccess({email: email, password: password});
//         } else {
//             onFailure('Too short');
//         }
//         // return {user: email}
//     }, 2000);
// }

// login('asdfasdf@gmail.com', '34567898iuhgh',
//  (pokemon) => {
//     console.log(pokemon);
// }, (err) => {
//     console.log(err);
// });

console.log("start");

console.log("end");
