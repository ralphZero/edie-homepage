(function(){
    let toggle = document.querySelector('.nav-list__toggle');

    toggle.addEventListener('click',(e) => {
        let nav_list = e.currentTarget.parentElement.nextElementSibling;
        
        if(nav_list.style.maxHeight) {
            nav_list.style.maxHeight = null;
        } else {
            nav_list.style.maxHeight = nav_list.scrollHeight + "px";
        }
    }, false);
})();