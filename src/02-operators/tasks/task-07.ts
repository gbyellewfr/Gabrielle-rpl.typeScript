/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPricePerNight: number = 650000;
const nightsStayed: number = 4;
const serviceCharge: number = 120000;
const taxRate: number = 0.11;
const isVIPMember: boolean = true;

// Calculate room subtotal
const roomSubtotal: number = roomPricePerNight * nightsStayed;

// Calculate discount
const discountRate: number = isVIPMember ? 0.12 : 0;
const discount: number = roomSubtotal * discountRate;

// Calculate tax
const taxableAmount: number = roomSubtotal - discount;
const tax: number = taxableAmount * taxRate;

// Calculate final payment
const finalPayment: number = taxableAmount + tax + serviceCharge;

// Determine free breakfast eligibility
const isEligibleForFreeBreakfast: boolean = nightsStayed >= 3 || isVIPMember;

console.log("=== Hotel Billing ===");
console.log("Room Subtotal: Rp", roomSubtotal.toLocaleString());

console.log("Discount: Rp", discount.toLocaleString());
console.log("Tax: Rp", tax.toLocaleString());
console.log("Service Charge: Rp", serviceCharge.toLocaleString());
console.log("Final Payment: Rp", finalPayment.toLocaleString());
console.log("Eligible for Free Breakfast:", isEligibleForFreeBreakfast ? "Yes" : "No");

