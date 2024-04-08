//警告框
const alertPlaceholder = document.querySelector('.alert_box')//弹窗的父级元素
const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
    alertPlaceholder.append(wrapper)
    console.log('弹窗喽')
    setTimeout(() => {
      wrapper.remove();
      console.log('关闭喽')
    }, 2000);
}
function check (phoneNum,mesg,password,retry){
    if(phoneNum.length != 11){
        alert('请输入正确的手机号','warning')
        return false;
    }
    if(mesg != send_mesg){
        alert('请输入正确的验证码','warning')
        return false;
    }
    if((password == '') && (retry == '')){
        alert('请输入密码','warning')
        return;
    }
    if(password != retry){
        alert('两次密码不同','warning')
        return false;
    }
    return true;
}
var send_mesg = '';
document.querySelector('.send_mesg').addEventListener('click',e=>{
    e.preventDefault();
    // axios({
    //     url:'null',
    //     method:'GET',
    //     params:{
    //        phoneNum
    //     }
    // }).then((result)=>{
    //     console.log('接受返回的验证码');
    //     
    //     console.log('处理验证码');
    // })
    console.log('发送验证码')
    send_mesg = '1234';
})

//事件监听器
document.querySelector('.reg_form form').addEventListener('submit',e=>{
    e.preventDefault();
    console.log(e.target)
    const data = serialize(e.target,{hash:true,empty:true});
    const {phoneNum,mesg,password,retry} = data;
    if(document.querySelector('.agree input').checked){
      if((phoneNum == '') && (password == '') && (mesg == '') && (retry == '')){
        alert('请输入信息','warning')
      }else{
        console.log('勾选了');
        console.log('传参');
        console.log('反馈')
        // axios({
        //   url:'null',
        //   method:'POST',
        //   data:{
        //     phoneNum,
        //     password
        //   }
        // }).then((result) =>{
        //   if(result){
        //   alert('登陆成功','success');
        //   }else{
        //     alert('登陆失败,用户名或密码错误','danger')
        //     e.target.reset(); 
        //   }
        // })
        if(check(phoneNum,mesg,password,retry)){
            alert('注册成功','success');
            setTimeout(() => {
              location.href='login.html'
            }, 2000);
        }else{
            return;
        }
      }
    }else{
        console.log('没勾选')
          alert('请同意用户协议','warning')
    }
    })