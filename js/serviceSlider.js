(function () {
    // start slider
    let prev = document.querySelector('.servicesSlider__prev'),
        next = document.querySelector('.servicesSlider__next'),
        allSlides = document.querySelectorAll('.servicesSlider__slide'),
        slideBetweenStyle = window.getComputedStyle(document.querySelector('.servicesSlider__slide')),
        slideBetweenMargin = parseInt(slideBetweenStyle.marginBottom.match(/\d+/)),
        i = 0;

    // if window inner width < 578 margin bottom + 10
    if (window.innerWidth <= 578) slideBetweenMargin += 10;

    // prev btn onclick
    prev.addEventListener('click' , showPrevComment);

    // next btn onclick
    next.addEventListener('click' , showNextComment);


    function showNextComment() {
        if (i < allSlides.length - 1) {
            i++;

            // stop if end
            if (i == allSlides.length - 1) next.classList.remove('_active');

            // get margin top
            let elStyle = window.getComputedStyle(allSlides[0]);

            let nextElHeight = allSlides[i - 1].offsetHeight;
            let increasedMargin = parseInt(elStyle.marginTop.match(/\d+/)) + nextElHeight + slideBetweenMargin;
            allSlides[0].style.marginTop = -increasedMargin + 'px';

            // add active to prev btn
            prev.classList.add('_active');

            // set pause while click
            this.removeEventListener('click' , showNextComment);
            allSlides[0].ontransitionend = () => this.addEventListener('click' , showNextComment);
        } 
    }

    function showPrevComment() {
        if (i != 0) {
            i--;
    
            // stop if i = 0
            if (i == 0) prev.classList.remove('_active')
    
            // get margin top
            let elStyle = window.getComputedStyle(allSlides[0]);
    
            let prevElHeight = allSlides[i].offsetHeight;
            let increasedMargin = parseInt(elStyle.marginTop.match(/\d+/)) - prevElHeight - slideBetweenMargin;
            allSlides[0].style.marginTop = -increasedMargin + 'px';
    
            // add active to prev btn
            next.classList.add('_active');
    
            // set pause while click
            this.removeEventListener('click' , showPrevComment);
            allSlides[0].ontransitionend = () => this.addEventListener('click' , showPrevComment);
        }
    }
})();
