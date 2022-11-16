import { mount } from 'products/ProductsIndex';
import 'cart/CartShow';

const htmlElement = document.querySelector("#my-products");
mount(htmlElement);

console.log('Container friend');