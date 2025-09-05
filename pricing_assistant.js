// Coding Challenge 02
let productName = "Colombian Coffee";
let costPerUnit = 6.50;
// 1 pound per unit
let basePrice = 17.99;
let discountRate = 0.10;
let salesTaxRate = 0.075;
const fixedMonthlyCosts = 2000.00;
let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlycosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;
console.log(`
Product Name: ${productName}
Discounted Price (before tax): $${discountedPrice.toFixed(2)}
Final Price with Tax: $${finalPriceWithTax.toFixed(2)}
Profit Per Unit: $${profitPerUnit.toFixed(2)}
Break Even Units: ${breakEvenUnits}
Per-Unit Profitability: ${isProfitablePerUnit}
`);
