import Notiflix from 'notiflix';

import { createMarkupBlock } from './createMarkupBlock';
import { createMarkupList } from './createMarkupList';
import { refs } from './refs';

const BASE_URL = 'https://restcountries.com';
const fetchOptions = 'name,capital,population,flags,languages';

export function fetchCountries(name) {
  fetch(`${BASE_URL}/v3.1/name/${name}?fields=${fetchOptions}`)
    .then(response => {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';

      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then(data => {
      //   refs.countryList.innerHTML = '';
      //   refs.countryInfo.innerHTML = '';
      if (data.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name');
        return;
      } else if (data.length >= 2) {
        const markup = data
          .map(element => {
            return createMarkupList(element.name.official, element.flags.svg);
          })
          .join('');
        // console.log(markup);
        refs.countryList.innerHTML = markup;
        return;
      }

      const markup = createMarkupBlock(data[0]);
      //   console.log(markup);
      refs.countryInfo.innerHTML = markup;
    })
    .catch(error => {
      console.error(error);
      Notiflix.Notify.failure('Країни з такою назвою немає!');
    });
}
