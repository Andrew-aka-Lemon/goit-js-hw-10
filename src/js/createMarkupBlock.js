export function createMarkupBlock({ name, capital, population, flags, languages }) {
  const languageBlock = Object.values(languages).join(', ');

  return `<div class="one_country_block">
<img src="${flags.svg}" alt="flag of ${name.official}" class="country_img" />
<p class="country_name">${name.official}</p>
</div>
<ul>
<li class="one_country_item country_name"><span>Capital: </span>${capital[0]}</li>
<li class="one_country_item country_name"><span>Population: </span>${population.toLocaleString()} people</li>
<li class="one_country_item country_name"><span>Languages: </span>${languageBlock}</li>
</ul>`;
}
