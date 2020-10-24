function isInViewport(element){
    const rect = element.getBoundingClientRect();
    const middle = (rect.bottom + rect.top) / 2;
    return (
        rect.top >= 0 &&
        middle <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

(function(){
    const deck = document.querySelector('.services-deck');
    let card = document.querySelectorAll('.services-card');
    let design_cards = document.querySelectorAll('.card');

    document.addEventListener('scroll', (e) => {
        if(isInViewport(deck)){
            for(let i=0, c=card.length; i < c; i++){
                card[i].classList.add('services-card--animation-'+i);
            }
        }
    }, false);

    let test = document.querySelector('#test');
    document.addEventListener('scroll',(e)=>{
        for(let i=0, d=design_cards.length;  i < d; i++){
            if(isInViewport(design_cards[i])){
                design_cards[i].classList.add('card--animation-'+i);
            }
        }
    }, false);

    window.onload = (e)=>{

        console.log('Viewport height: '+window.innerHeight);
        console.log('Viewport width: '+window.innerWidth);

        let ourwork = document.querySelectorAll('.ourwork');
        for(let i=0; i < ourwork.length; i++){
            ourwork[i].classList.add('ourwork--animation-'+i);
        }
        
        for(let i=0; i < card.length; i++){
            card[i].classList.add('services-card--opacity-0');
        }

        for(let i=0; i <  design_cards.length; i++){
            design_cards[i].classList.add('card-opacity');
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