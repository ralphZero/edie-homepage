function isInViewport(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

(function(){
    let card = document.querySelector('.services-deck');
    document.addEventListener('scroll', (e) => {
        console.log('Is in viewport ? '+isInViewport(card));
    }, false);
})();

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