import { validate } from 'class-validator';

import { Product } from './product.model';

const newProduct = new Product('', -7.99);

validate(newProduct).then(errors => {
    if (errors.length > 0) {
        console.log('Validation error!');
        console.log(errors);
    } else {
        console.log(newProduct.getInfo());
    }
});