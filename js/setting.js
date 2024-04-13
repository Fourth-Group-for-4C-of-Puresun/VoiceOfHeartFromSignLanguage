var value = localStorage.getItem("dark");
if(value == "true"){
    var checkbox = document.querySelector('.form-check-input');
    checkbox.checked = true;
}
document.querySelector('.form-check input' ).addEventListener('change', e=>{
    console.log(localStorage.getItem("dark"))
    var value = localStorage.getItem("dark");
    if(value != null){
        if(localStorage.getItem("dark") == "true")
        {
            console.log("改成假")
            localStorage.setItem("dark", "false");

        }else{
            localStorage.setItem("dark", "true")
        }
    }else{
        localStorage.setItem("dark","true");
    }
    console.log(localStorage.getItem("dark"))
})
