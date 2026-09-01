/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */

type Order = {
  id: string;
  paid: boolean;
  stockAvailable: boolean;
};

const orders: Order[] = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let readyToShipCount: number = 0;
let unpaidCount: number = 0;
let waitingStockCount: number = 0;
const readyOrderIds: string[] = [];

for (const order of orders) {
  // Cek apakah siap dikirim (harus lunas DAN stok ada)[cite: 2, 3]
  if (order.paid && order.stockAvailable) {
    readyToShipCount++;
    readyOrderIds.push(order.id);
  }

  // Cek apakah belum bayar (paid === false)[cite: 2, 6]
  if (!order.paid) {
    unpaidCount++;
  }

  // Cek apakah menunggu stok (stockAvailable === false)[cite: 2, 6]
  if (!order.stockAvailable) {
    waitingStockCount++;
  }
}

console.log("=== Warehouse Shipping Summary ===");
console.log(`Orders Ready to Ship  : ${readyToShipCount}`);
console.log(`Unpaid Orders         : ${unpaidCount}`);
console.log(`Waiting for Stock     : ${waitingStockCount}`);
console.log(`Ready Order IDs       : ${readyOrderIds.join(", ")}`);


