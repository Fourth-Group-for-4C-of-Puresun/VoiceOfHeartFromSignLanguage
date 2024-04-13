if(value == "true"){
document.querySelector('.main_bord').style.backgroundColor =  "rgb(128, 128, 128)";
var elements = document.getElementsByClassName('card-body');
for(var i = 0; i < elements.length; i++){
    elements[i].style.backgroundColor = 'rgb(128,128,128)';
}
}
