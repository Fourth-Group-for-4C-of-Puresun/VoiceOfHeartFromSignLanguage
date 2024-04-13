if(value == "true"){
document.querySelector('.translate').style.backgroundColor =  "rgb(128, 128, 128)";
document.querySelector('.btn').style.backgroundColor =  "rgb(128, 128, 128)";
document.querySelector('.foot').style.backgroundColor =  "rgb(128, 128, 128)";
document.querySelector('.start button').style.backgroundColor =  "rgb(128, 128, 128)";
}
function yuyan(){

}
function start(){

}

document.querySelector('.yuyan button').addEventListener('click',e=>{
    console.log(e.target.parentNode.classList+'被点击了')
    
})
document.querySelector('.start button').addEventListener('click',e=>{
    console.log(e.target.parentNode.classList+'被点击了')
    console.log(document.querySelector('.translate p').innerHTML)
    document.querySelector('.translate p').innerHTML = 'null'
})