//Choose a random color
const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click', /*event*/() => {
  /*button.innerHTML = `Click count: ${event.detail}`;*/
  //document.getElementsByClassName('container').style.backgroundColor = "green";
  //button.style.backgroundColor = "blue";
  setRandomColor();
});

/* 
  ready code copied from https://stackoverflow.com/questions/1484506/random-color-generator
*/
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  body.style.backgroundColor = getRandomColor();
}

/* 
  ready code copied from https://romeojeremiah.github.io/project_change_color_background/

#const button = document.querySelector('button')
#const body = document.querySelector('body')
#const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

#body.style.backgroundColor = 'violet'
#button.addEventListener('click', changeBackground)

#function changeBackground(){
#const colorIndex= parseInt(Math.random()*colors.length)
#body.style.backgroundColor = colors[colorIndex]
#}
*/