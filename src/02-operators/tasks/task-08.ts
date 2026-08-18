/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter: number = 25640;
const currentMeter: number = 25892;
const electricityPricePerKWh: number = 1650;
const solarPanelInstalled: boolean = true;
const energySavingMode: boolean = false;

// Calculate total energy consumption
const energyConsumption: number = currentMeter - previousMeter;

// Calculate electricity bill
const electricityBill: number = energyConsumption * electricityPricePerKWh;

// Calculate final bill with discounts
let finalBill: number = electricityBill;

if (solarPanelInstalled) {
    finalBill *= 0.80; // 20% discount for solar panel
}
if (energySavingMode) {
    finalBill *= 0.95; // Additional 5% discount for energy saving mode
}   

// Determine Green Energy Program eligibility
const isEligibleForGreenEnergyProgram: boolean = solarPanelInstalled && energyConsumption < 300 && energySavingMode;

console.log("=== Electricity Usage Summary ===");
console.log("Previous Meter:", previousMeter);
console.log("Current Meter:", currentMeter);
console.log("Energy Consumption (kWh):", energyConsumption);
console.log("Electricity Bill: Rp", electricityBill.toLocaleString());
console.log("Final Bill after Discounts: Rp", finalBill.toLocaleString());
console.log("Eligible for Green Energy Program:", isEligibleForGreenEnergyProgram ? "Yes" : "No");


    