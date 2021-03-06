function isInViewport(element){
    const rect = element.getBoundingClientRect();
    const middle = (rect.bottom + rect.top) / 2;
    return (
        rect.top >= 0 &&
        middle <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function hasLeftViewport(element){
    const rect = element.getBoundingClientRect();
    return rect.bottom < 0;
}

(function(){
    const deck = document.querySelector('.services-deck');
    let card = document.querySelectorAll('.services-card');
    let design_cards = document.querySelectorAll('.card');
    let team_block = document.querySelector('.team-block');
    let team = document.querySelector('.team');

    document.addEventListener('scroll', (e) => {
        if(isInViewport(deck)){
            for(let i=0, c=card.length; i < c; i++){
                card[i].classList.add('services-card--animation-'+i);
            }
        }
    }, false);

    document.addEventListener('scroll',(e)=>{
        for(let i=0, d=design_cards.length;  i < d; i++){
            if(isInViewport(design_cards[i])){
                design_cards[i].classList.add('card--animation-'+i);
            }
        }
    }, false);

    document.addEventListener('scroll', (e)=>{
        if(isInViewport(team)){
            team.firstElementChild.classList.add('team--animation');
        }
        if(isInViewport(team_block)){
            let team_img = team_block.getElementsByTagName('img');
            team_img[0].classList.add('team-block--animation-0');
            team_img[1].classList.add('team-block--animation-1');
            team_img[2].classList.add('team-block--animation-2');
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

        document.querySelector('.team-desc').style.opacity = 0;
        document.querySelectorAll('.team-block__img').forEach(item => {
            item.classList.add('card-opacity');
        });
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