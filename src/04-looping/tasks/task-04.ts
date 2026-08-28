/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales: number[] =[
    125000,
    350000,
    78000,
    910000,
    150000,
    420000,
    275000,
    99000,
    640000,
    18000
] 

let total: number = 0;
let highest: number = sales[0];
let lowest: number = sales[0];
let countOver: number = 0;


for (const transaction of sales) {
    total += transaction;

    if (transaction > highest){
        highest = transaction;
    }

    if (transaction < lowest) {
        lowest = transaction;
    }

    if (transaction >= 300000){
        countOver++;
    }
}

const Average: number = total / sales.length;

console.log("=== Sales Analysis ===");
console.log(`1. Total Revenue: Rp${total.toLocaleString("id-ID")}`);
console.log(`2. Highest Transaction: Rp${highest.toLocaleString("id-ID")}`);
console.log(`3. Lowest Transaction: Rp${lowest.toLocaleString("id-ID")}`);
console.log(`4. Transactions >= Rp300,000: ${countOver}`);
console.log(`5. Average Transaction: Rp${Average.toLocaleString("id-ID")}`);



