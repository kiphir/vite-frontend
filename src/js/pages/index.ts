// Import our custom CSS
import '#scss/pages/index.scss';

// Vue
import VueCreate from "#js/components/VueCreate.js";
// @ts-ignore
import templateVue from "#vue/app.vue";

const vueCreate = new VueCreate;
vueCreate.init({
    name: 'template-vue',
    component: templateVue,
});

// swiper
import Swiper from "swiper";
import "swiper/swiper-bundle.css"

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
