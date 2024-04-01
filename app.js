const autoScroll = () => {

    document.addEventListener('DOMContentLoaded', function () {
        const images = document.querySelectorAll('.scrolling-window-img');
        let currentIndex = 0;
    
        images.forEach((image, index) => {
            image.addEventListener('click', function () {
                currentIndex = (currentIndex + 1) % images.length;
                
                images[currentIndex].scrollIntoView({ behavior: 'smooth' });
            });
        });
    });
    
}

autoScroll();