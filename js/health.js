if(value == "true"){
    var elements1 = document.getElementsByTagName('button');
    console.log(elements1)
    for(var i = 0; i < elements1.length; i++){
    elements1[i].style.backgroundColor = 'rgb(128,128,128)';
    }
    var elements2 = document.getElementsByTagName('p');
    console.log(elements2)
    for(var i = 0; i < elements2.length; i++){
    elements2[i].style.backgroundColor = 'rgb(128,128,128)';
    }
    var elements2 = document.getElementsByTagName('input');
    console.log(elements2)
    for(var i = 0; i < elements2.length; i++){
    elements2[i].style.backgroundColor = 'rgb(128,128,128)';
    }
}
function mod_heart_start(){

}
function mod_worm_start(){

}
function mod_sug_start(){
    
}

document.querySelector('.mod_heart_start button').addEventListener('click',e=>{
    console.log(e.target.parentNode.classList+'被点击了')
    const elements = document.getElementsByClassName('number');
    for (let i = 0; i < elements.length; i++) {
        elements[i].value = 'null';
    }
})
document.querySelector('.mod_worm_start button').addEventListener('click',e=>{
    console.log(e.target.parentNode.classList+'被点击了')
    const elements = document.getElementsByClassName('number2');
    for (let i = 0; i < elements.length; i++) {
        elements[i].value = 'null';
    }
})
document.querySelector('.mod_sug_start button').addEventListener('click',e=>{
    console.log(e.target.parentNode.classList+'被点击了')
    document.querySelector('.suggest input').value = 'null'
})