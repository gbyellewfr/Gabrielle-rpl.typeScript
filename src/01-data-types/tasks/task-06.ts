/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

interface marketPlace{
    code: string;
    name: string;
    price: number;
    quantity: number;
    weight: number;
    rating: number;
    discount: number;

}

const product1 : marketPlace = {
    code : "KOPI001",
    name: "Kapal Api",
    price: 3000,
    quantity: 100,
    weight: 2,
    rating: 6,
    discount: 2,

}

const product2 : marketPlace = {
    code : "TEH002",
    name: "Melati",
    price: 3000,
    quantity: 50,
    weight: 2,
    rating: 8,
    discount: 2,

}

const product3 : marketPlace = {
    code : "GULA003",
    name: "Kapal Api",
    price: 3000,
    quantity: 200,
    weight: 2,
    rating: 6,
    discount: 5,

}

console.log("=== Product Information ===");
console.log(product1);
console.log(product2);
console.log(product3);
