import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';

import { Product } from './product.model';

const products = [
    { title: 'A carpet', price: 10.99 },
    { title: 'A book', price: 20.00 }
];

const loadedProdcts = plainToInstance(Product, products);

for (const prod of loadedProdcts) {
    console.log(prod.getInfo());
}