/**
 * Calculates the total price after applying a discount and tax.
 * @param {number} basePrice - The initial price before discounts and taxes.
 * @param {number} discountRate - Discount percentage (e.g., 0.1 for 10%).
 * @param {number} taxRate - Tax percentage (e.g., 0.18 for 18%).
 * @returns {number} - Final price after applying discount and tax.
 */
function calculateAfterDiscountPrice(basePrice, discountRate, taxRate) {
  const discountedPrice = basePrice * (1 - discountRate);
  const finalPrice = discountedPrice * (1 + taxRate);
  return parseFloat(finalPrice.toFixed(2));
}

// Example usage:
const price = calculateAfterDiscountPrice(1000, 0.1, 0.18); // Expected: 1062.00
console.log(`Final price: ₹${price}`);




function sayHelloRohith(){
  console.log("hello Rohith");
  return true;
}