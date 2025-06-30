---
title: added new util
---
# Introduction

This document will walk you through the addition of a new utility function in the codebase.

The utility function is designed to calculate the total price after applying a discount and tax. This is useful for scenarios where pricing adjustments are necessary based on promotional discounts and applicable taxes.

We will cover:

1. Why the utility function was implemented.
2. How the function calculates the final price.
3. Example usage of the function.

# Purpose of the utility function

The utility function <SwmToken path="/frontend-template/src/utils/doc-testing.js" pos="8:2:2" line-data="function calculateAfterDiscountPrice(basePrice, discountRate, taxRate) {">`calculateAfterDiscountPrice`</SwmToken> was implemented to streamline the calculation of final prices in applications where discounts and taxes are applied. This reduces repetitive code and centralizes the logic for price calculation.

# Function logic

<SwmSnippet path="frontend-template/src/utils/doc-testing.js" line="1">

---

The function takes three parameters: `basePrice`, `discountRate`, and `taxRate`. It first calculates the discounted price by applying the discount rate to the base price. Then, it applies the tax rate to the discounted price to get the final price. The result is rounded to two decimal places for precision.

```
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
```

---

</SwmSnippet>

# Example usage

<SwmSnippet path="frontend-template/src/utils/doc-testing.js" line="14">

---

An example usage of the function is provided to demonstrate how it can be integrated into the codebase. This example shows the calculation of the final price for a base price of 1000 with a 10% discount and an 18% tax rate.

```
// Example usage:
const price = calculateAfterDiscountPrice(1000, 0.1, 0.18); // Expected: 1062.00
console.log(`Final price: ₹${price}`);
```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBRG9jQUklM0ElM0Flc3Nlbm5hcmtheQ==" repo-name="DocAI"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
