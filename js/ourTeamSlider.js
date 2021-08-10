(function () {
    let textElems = document.querySelectorAll('.our-team-slider__item'),
    buttonsContainer = document.querySelector('.our-team-slider__pics');

    // add click event on img container
    buttonsContainer.addEventListener('click' , changeSlide);

    function changeSlide(e) {
        // if target = img get index
        if (e.target.tagName != 'IMG') return false;

        let clickedImgIndex = e.target.parentNode.dataset.ourTeamSliderIndex,
            activeElemImg = document.querySelector('.our-team-slider__pic._active'),
            activeElemText = document.querySelector('.our-team-slider__item._active');

        // hide active elem
        activeElemImg.classList.remove('_active');
        activeElemText.classList.remove('_active');
        
        // show clicked elem
        textElems[clickedImgIndex].classList.add('_active');
        buttonsContainer.children[clickedImgIndex].classList.add('_active');
    }
})();