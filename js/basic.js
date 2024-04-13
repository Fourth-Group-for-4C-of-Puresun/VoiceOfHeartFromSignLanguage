//选中的功能区高亮
var pageName = document.querySelector('.content').classList[1];
pageName = pageName.replace('1','');
var sideMenu =  document.querySelector(`.${pageName}`);
var sideMenuFont = document.querySelector(`.${pageName} a`)
sideMenuFont.style.color = '#aa0000'; // 设置字体颜色为白色
sideMenu.style.backgroundColor = '#edf3ff'; // 设置背景颜色为浅蓝色


var value = localStorage.getItem("dark");
if(value == "true"){
    document.querySelector('body').style.backgroundColor =  "rgb(128, 128, 128)";
    document.querySelector('.content').style.backgroundColor =  "rgb(128, 128, 128)";
    document.querySelector('.header_content').style.backgroundColor =  "rgb(128, 128, 128)";
    document.querySelector('.login').style.backgroundColor =  "rgb(128, 128, 128)";


}