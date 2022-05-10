import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import { scrollHeader } from "./files/script.js";
document.addEventListener('DOMContentLoaded', () => {
    scrollHeader();
})

// Подключаем скрипты работы с формами
// import * as flsForms from "./files/forms/forms.js";
import "./files/forms.js";
import "./files/sliders.js";
import "./files/dynamic_adapt.js";
import "./modules/functions.js";
//<lightgallery>========================================================================================================================================================
import "./files/lightgallery.min.js";
lightGallery(document.getElementById('_gallery'), {
    selector: '.row-furniture__item',
});
//</lightgallery>========================================================================================================================================================


/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

import { menuHide } from "./files/script.js";
menuHide();
