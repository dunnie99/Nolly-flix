

const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon");
let count = document.querySelector("#count");

let clicked = false;

likeBtn.addEventListener("click", () => {
    if (!clicked) {
        clicked = true;
        likeIcon.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        count.textContent++;
    } else {
        clicked = false;
        likeIcon.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        count.textContent--;
    }
}); 


/*let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    spaceBetween: 5,
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    loopAdditionalSlides: 5,
    speed: 500,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 5,
            slidesPerGroup: 6,
            freeMode: false
        }
    }
});*/
