const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
const toggleModalButton = document.querySelectorAll('.toggle-modal');

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
    // When the user clicks on the button, scroll to the top of the document
    /*     document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
     */
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };
    scrollToTop();
})