import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import Product from './product.model';

const products = [
  {
    title: 'abc',
    price: 29.99
  },
  {
    title: 'bcd',
    price: 20
  }
]

// const newProd = new Product('dasdsa', -22);

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// })
const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInfo());
}
