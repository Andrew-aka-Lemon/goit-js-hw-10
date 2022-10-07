import './css/styles.css';
import Debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const BASE_URL = 'https://restcountries.com';

const fetchOptions = 'name,capital,population,flags,languages';

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', Debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  //   const input = event.currentTarget.value;
  //   Notiflix.Notify.info('it works');
  // console.log(event.target.value);
  const countryToFind = event.target.value.trim().toLowerCase();
  //   console.log(countryToFind);
  if (!countryToFind) {
    return;
  }
  fetchCountries(countryToFind);
}

function fetchCountries(name) {
  fetch(`${BASE_URL}/v3.1/name/${name}?fields=${fetchOptions}`)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then(data => {
      console.log(data.length);
      if (data.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name');
        return;
      } else if (data.length >= 2) {
        data.forEach(element => {
          createMarkupList(element.name.official, element.flags.svg);
        });
        return;
      }
      createMarkupBlock(data[0]);
    })
    .catch(error => {
      console.error(error);
      Notiflix.Notify.failure('Країни з такою назвою немає!');
    });
}

function createMarkupList(name, flag) {
  console.log(name);
  console.log(flag);
}

function createMarkupBlock({ name, capital, population, flags, languages }) {
  console.log(name.official);
  console.log(capital[0]);
  console.log(population);
  console.log(flags.svg);

  if (Object.values(languages).length > 1) {
    console.log(Object.values(languages).join(', '));
  } else if (Object.values(languages).length === 1) {
    console.log(Object.values(languages)[0]);
  }
}
