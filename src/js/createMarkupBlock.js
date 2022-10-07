export function createMarkupBlock({ name, capital, population, flags, languages }) {
  //   console.log(name.official);
  //   console.log(capital[0]);
  //   console.log(population);
  //   console.log(flags.svg);
  let languageBlock = '';

  if (Object.values(languages).length > 1) {
    languageBlock = Object.values(languages).join(', ');
  } else if (Object.values(languages).length === 1) {
    languageBlock = Object.values(languages)[0];
  }

  return `<div class="one_country_block">
<img src="${flags.svg}" alt="flag of ${name.official}" class="country_img" />
<p class="country_name">Ukraine</p>
</div>
<ul>
<li class="one_country_item country_name"><span>Capital: </span>${capital[0]}</li>
<li class="one_country_item country_name"><span>Population: </span>${population.toLocaleString()} people</li>
<li class="one_country_item country_name"><span>Languages: </span>${languageBlock}</li>
</ul>`;
}

/* <div class="one_country_block">
<img src="https://flagcdn.com/ua.svg" alt="flag of ${Ukraine}" class="country_img" />
<p class="country_name">Ukraine</p>
</div>
<ul>
<li class="one_country_item country_name"><span>Capital: </span>${Kyiv}</li>
<li class="one_country_item country_name"><span>Population: </span>${44134693}</li>
<li class="one_country_item country_name"><span>Languages: </span>${Ukrainian}</li>
</ul> */
