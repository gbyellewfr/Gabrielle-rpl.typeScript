/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

//1. Primitive types
const friedRicePrice: number = 18000;
const mineralWaterPrice: number = 5000;
const discount: number = 10000;
const friedRiceQuantity: number = 3;
const mineralWaterQuantity: number = 2;

//2. Clculate total Price
const totalFriedRicePrice: number = friedRicePrice * friedRiceQuantity;
const totalMineralWaterPrice: number = mineralWaterPrice * mineralWaterQuantity;
const grandTotal: number = totalFriedRicePrice + totalMineralWaterPrice;
const finalPayment: number = grandTotal - discount;

console.log("=== Lunch Purchase ===");
console.log(`Total Fried Rice Price: Rp ${totalFriedRicePrice.toLocaleString()}`);
console.log(`Total Mineral Water Price: Rp ${totalMineralWaterPrice.toLocaleString()}`);
console.log(`Grand Total: Rp ${grandTotal.toLocaleString()}`);
console.log(`Final Payment: Rp ${finalPayment.toLocaleString()}`);
