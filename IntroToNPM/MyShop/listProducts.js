var faker = require('faker');
console.log("=======================");
console.log("Welcome to My Shop");
console.log("=======================");
for (var i =0;i < 10; i++ ) {
    var prod = faker.commerce.productName() + " - $" + faker.commerce.price();
    console.log(prod);
}

