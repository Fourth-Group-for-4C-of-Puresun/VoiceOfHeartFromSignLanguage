document.querySelector('.search_btn').addEventListener('click', e => {
    e.target.parentNode.insertAdjacentHTML('beforeend', '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>');
    setTimeout(() => {
        const spinner = document.querySelector('.spinner-border');
        if (spinner) {
            spinner.remove();
        }
        var options = {
            backdrop: 'static',
            keyboard: false,
            focus: true,
            show: true
        };
        var myModal = new bootstrap.Modal(document.querySelector('.modal'), options);
        
        myModal.show();
        setTimeout(() => {
            myModal.hide()
        }, 1500);
    }, 2000);  
})
