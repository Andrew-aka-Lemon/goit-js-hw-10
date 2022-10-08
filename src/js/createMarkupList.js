export function createMarkupList(name, flag) {
  return `<li class="country_item">
  <img src="${flag}" alt="flag of ${name}" class="country_img" />
  <p class="country_name">${name}</p>
</li>`;
}
