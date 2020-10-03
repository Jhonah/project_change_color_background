const button = document.getElementById('btn');
const colorArray = ["#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#FF00FF", "#0000FF"];
const lenght = colorArray.length;

button.addEventListener('click', () => {
    document.body.style.backgroundColor = colorArray[ getRandomInt(lenght - 1) ];
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}