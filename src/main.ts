import {faker} from '@faker-js/faker';
import { addProduct, updateProduct, findProducts, products } from './products/product.service';


for ( let i = 0; i < 50; i++) {
    addProduct({ 
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
        color: faker.color.human(),
        price: parseInt(faker.commerce.price(), 10),   
        isNew: faker.datatype.boolean(),
        tags: [faker.commerce.productAdjective(), faker.commerce.productAdjective(), faker.commerce.productAdjective()],
        size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL', 'XXL']),
        title: faker.commerce.productName(),
        stock: faker.number.int(),
        categoryId: faker.string.uuid(),
    })
}

console.log(products);
const num = 0; 
const valB = num ?? "default";

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
});


findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['as', 'as']
})

console.log(valB);

