// click anchors
const anchors = document.querySelectorAll('.navbar-collapse a[href*="#"]')
let navbarTop = document.querySelector('.navbar').offsetHeight - document.querySelector('.navbar-collapse').offsetHeight;

for (let key in anchors) {
  let elem = anchors[key];

  elem.onclick = (e) => {
    e.preventDefault();
    
    const blockID = anchors[key].getAttribute('href').substr(1);

    window.scrollTo({
      top: document.getElementById(blockID).offsetTop - navbarTop,
      behavior: "smooth",
      transition: 1
    })

    anchors.forEach(el => {
      el.classList.remove('_active');
    })

    anchors[key].classList.add('_active');

    window.removeEventListener('scroll' , windowScroll);

    setTimeout(() => {
      window.addEventListener('scroll' , windowScroll);
    }, 1000);
  }
}

// auto anchors
let sections = document.querySelectorAll('.anchors-section');

window.addEventListener('scroll' , windowScroll);


function windowScroll(e) {
  sections.forEach((el,i) => {
    if (pageYOffset >= el.offsetTop - navbarTop && pageYOffset <= el.offsetTop + el.offsetHeight - navbarTop) {
      anchors.forEach(el2 => {
        el2.classList.remove('_active');
      })

      anchors[i].classList.add('_active');
    }
  })
}