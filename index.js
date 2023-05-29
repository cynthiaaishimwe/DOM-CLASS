// document.getElementsByClassName('container')
let child = document.getElementById('container').children;
console.log({child});

let lastChild = document.getElementById('container').lastChild
console.log({lastChild});

document.getElementById('hello').style.color = 'red'
document.getElementById('hello').style.textDecoration = 'underline'
document.getElementById('text').innerHTML = "hello my name is cynthia and i am a student"


let h2 = document.createElement('h2');
h2.innerHTML = 'I am new here';
document.getElementById('container').appendChild(h2)

let button = document.getElementById('button')
button.addEventListener('click',function(){
    button.innerHTML = 'Clicked !!'
})