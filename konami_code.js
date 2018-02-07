const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
let i = 0;

//var body = document.querySelector('body')
var keys = ''
document.body.addEventListener('keydown', function(e) {
  keys = parseInt(e.detail || e.which)

  console.log(e.detail)
  //console.log(e.location)
  console.log(e.which)

  if (keys === code[i]) {
    index ++

    if (i === code.length) {
      alert("WOO HOO! You did it!")

      i = 0
      keys = ''
    }
  }

  else {
    i = 0
    keys = ''
  }
})
}
init();
