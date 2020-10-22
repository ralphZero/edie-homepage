function isInViewport(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
const deck = document.querySelector('.services-deck');
let card = document.querySelectorAll('.services-card');
(function(){
    document.addEventListener('scroll', (e) => {
        if(isInViewport(deck)){
            for(let i=0; i < card.length; i++){
                card[i].classList.add('services-card--animation-'+i);
            }
        }
    }, false);

    window.onload = (e)=>{
        let ourwork = document.querySelectorAll('.ourwork');
        for(let i=0; i < ourwork.length; i++){
            ourwork[i].classList.add('ourwork--animation-'+i);
        }
        
        for(let i=0; i < card.length; i++){
            card[i].classList.add('services-card--opacity-0');
        }
    };
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