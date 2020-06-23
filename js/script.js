let button = document.querySelector('button');

button.addEventListener('click', /*event*/() => {
    /*button.innerHTML = `Click count: ${event.detail}`;*/
    //document.getElementsByClassName('container').style.backgroundColor = "green";
    document.body.style.backgroundColor = "green";
    button.style.backgroundColor = "blue";
});
