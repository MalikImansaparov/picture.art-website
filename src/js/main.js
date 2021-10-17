import checkTextInputs from './modules/checkTextInputs';
import forms from './modules/forms';
import mask from './modules/mask';
import modals from './modules/modals';
import showMoreStyles from './modules/showMoreStyles';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
  modals();
  sliders(
    '.feedback-slider-item',
    'horizontal',
    '.main-prev-btn',
    '.main-next-btn'
  );
  sliders('.main-slider-item', 'horizontal');
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles('.button-styles', '#styles .row');
});
