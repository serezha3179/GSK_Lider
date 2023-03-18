import * as flsFunctions from './modules/functions.js';

import './header-burger.js';
import './form-validation.js';
import './jquery-3.6.4.min.js';
import './slick.min.js';
import './slider.js';

flsFunctions.testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
}); 
