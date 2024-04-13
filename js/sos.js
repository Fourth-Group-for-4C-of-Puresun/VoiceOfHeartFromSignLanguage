if(value == "true"){
    document.querySelector('.inp').style.backgroundColor =  "rgb(128, 128, 128)";
    document.querySelector('.form-control').style.backgroundColor =  "rgb(128, 128, 128)";
    var elements = document.getElementsByClassName('xin');
    console.log(elements)
    for(var i = 0; i < elements.length; i++){
    elements[i].style.backgroundColor = 'rgb(128,128,128)';
    }

}