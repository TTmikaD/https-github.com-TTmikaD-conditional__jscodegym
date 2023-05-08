// console.log('Hello!');

// let userName = prompt('What is the “official” name of JavaScript?');

// if (userName == 'ECMAScript') {
//   alert('right');
// } else {
//   alert('Didn’t know? ECMAScript!');
// }

let userName = prompt('hãy điền ID');

if (userName == 'admin') {
  let passWord__user = prompt('nhập mật khẩu');
  if (passWord__user == 'themaster') {
    console.log('welcome');
  } else {
    alert('Wrong password');
  }
} else if (userName == null) {
  alert('canceled');
} else {
  alert('I don’t know you');
}
