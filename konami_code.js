const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//
// function init() {
//   // Write your JavaScript code inside the init() function
// let i = 0;
//
// //var body = document.querySelector('body')
// //var keys = ''
// document.body.addEventListener('keydown', function(e) {
//   var keys = parseInt(e.detail || e.which)
//
//   //console.log(e.detail)
//   //console.log(e.location)
//   //console.log(e.which)
//
//   if (keys === code[i]) {
//     index ++
//
//     if (i === code.length - 1) {
//       alert("WOO HOO! You did it!")
//
//       i = 0
//       //keys = ''
//     }
//   }
//
//   else {
//     i = 0
//     //keys = ''
//   }
// })
// }
// //init();
