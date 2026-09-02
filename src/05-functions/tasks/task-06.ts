/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales: number[] = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
  let total: number = 0;
  for (const item of sales) {
    total += item;
  }
  return total;
}

function findHighestTransaction(sales: number[]): number {
  let highest: number = sales[0];
  for (const item of sales) {
    if (item > highest) {
      highest = item;
    }
  }
  return highest;
}

function findLowestTransaction(sales: number[]): number {
  let lowest: number = sales[0];
  for (const item of sales) {
    if (item < lowest) {
      lowest = item;
    }
  }
  return lowest;
}

function calculateAverageSale(sales: number[]): number {
  const total: number = calculateTotalSales(sales);
  return total / sales.length;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let count: number = 0;
  for (const item of sales) {
    if (item > minimumAmount) {
      count++;
    }
  }
  return count;
}

const totalRevenue = calculateTotalSales(sales);
const maxTransaction = findHighestTransaction(sales);
const minTransaction = findLowestTransaction(sales);
const avgTransaction = calculateAverageSale(sales);
const largeTxCount = countLargeTransactions(sales, 500000);

console.log("=== Daily Sales Dashboard ===");
console.log(`Total Sales            : Rp${totalRevenue.toLocaleString("id-ID")}`);
console.log(`Highest Transaction    : Rp${maxTransaction.toLocaleString("id-ID")}`);
console.log(`Lowest Transaction     : Rp${minTransaction.toLocaleString("id-ID")}`);
console.log(`Average Transaction    : Rp${avgTransaction.toLocaleString("id-ID")}`);
console.log(`Transactions > 500k    : ${largeTxCount}`);