import faker from 'faker';

const mount = (htmlElement) => {
  let products = '';

  for (let i = 0; i < 6; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  htmlElement.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
  const htmlElement = document.querySelector("#dev-products");

  htmlElement && mount(htmlElement);
}

export { mount };