import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

const htmlElementProducts = document.querySelector("#my-products");
mountProducts(htmlElementProducts);

const htmlElementCart = document.querySelector('#my-cart');
mountCart(htmlElementCart);

console.log('Container friend');