const generateColor = function() {
    let color = "#";
    const hex = "0123456789ABCDEF";
    for(let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 16);
        color += hex[num];
    }
    return color;
};

let start=document.querySelector('#start');
let stop=document.querySelector('#stop');
let timer;
const stopchange=function(){
    clearInterval(timer);
}
const changeColor = function(){
  
    const change_bgcolor =function(){
        document.body.style.backgroundColor=generateColor();
    }
    timer=setInterval(change_bgcolor,1000);
}
start.addEventListener('click', changeColor,);
stop.addEventListener('click', stopchange);
