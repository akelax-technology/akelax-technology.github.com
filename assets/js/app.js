const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
const toggleModalButton = document.querySelectorAll('.toggle-modal');
const header = document.querySelector('header');

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elems, {
        numVisible: 4,
        indicators: true,
    });

    setInterval(() => {
        instance.next();
    }, 1000);
});


const handleScroll = () => {
    alert('dflsdf')
}

window.onscroll = handleScroll;

const backToTopButton = document.querySelector('.back-to-top');

isModalOpen = false;
toggleModalButton.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        toggleModal();
    })
})

function toggleModal() {
    modalContainer.style.display = isModalOpen ? 'none' : 'flex';
    isModalOpen = !isModalOpen;
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener('click', () => {
    doScrollTo('body');
});

getElement('#tarif-btn').onclick = (event) => {
    event.preventDefault();
    doScrollTo('#tarif');
}
getElement('#services-btn').onclick = (event) => {
    event.preventDefault();
    doScrollTo('#services');
}

function doScrollTo(selector) {
    const ELEMENT = getElement(selector);
    const ELEMENT_POSITION = ELEMENT.offsetTop;
    const FROM_POSITION = document.documentElement.scrollTop || document.body.scrollTop;

    const scrollToTop = () => {
        const ACTUAL_POSITION = document.documentElement.scrollTop || document.body.scrollTop;
        if (ACTUAL_POSITION < ELEMENT_POSITION && FROM_POSITION < ELEMENT_POSITION) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, ACTUAL_POSITION + (ELEMENT_POSITION - ACTUAL_POSITION) / 8 + 1);
        } else if (ACTUAL_POSITION > ELEMENT_POSITION && FROM_POSITION > ELEMENT_POSITION) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, ACTUAL_POSITION - (ACTUAL_POSITION - ELEMENT_POSITION) / 8);
        }
    };
    scrollToTop();

}

function getElement(selector) {
    return document.querySelector(selector);
}