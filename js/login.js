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
//事件监听器
document.querySelector('.reg_form form').addEventListener('submit',e=>{
    e.preventDefault();
    console.log(e.target)
    const data = serialize(e.target,{hash:true,empty:true});
    const {phoneNum,password} = data;
    if(document.querySelector('.agree input').checked){
      if((phoneNum == '') && (password == '')){
        alert('请输入账号或密码','warning')
      }else{
        console.log('勾选了');
        console.log('传参');
        console.log('反馈')
        alert('登陆成功','success');
        sessionStorage.setItem('user',`${phoneNum}`);
        setTimeout(() => {
          location.href = 'index.html'
        }, 2000);
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
      }
    }else{
        console.log('没勾选')
          alert('请同意用户协议','warning')
    }
    })
