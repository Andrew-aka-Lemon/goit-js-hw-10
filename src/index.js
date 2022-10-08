import './css/styles.css';
import Debounce from 'lodash.debounce';

import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import { clearForm } from './js/clearForm';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', Debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  const countryToFind = event.target.value.trim().toLowerCase();
  // console.log(countryToFind);
  if (!countryToFind) {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';

    return;
  }
  fetchCountries(countryToFind);
}
