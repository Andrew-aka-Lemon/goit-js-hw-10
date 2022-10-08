import './css/styles.css';
import Debounce from 'lodash.debounce';

import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import { clearMarkup } from './js/clearMarkup';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', Debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  const countryToFind = event.target.value.trim().toLowerCase();
  if (!countryToFind) {
    clearMarkup();
    return;
  }
  fetchCountries(countryToFind);
}
