'use strict';
const specialCategoryPurchases = 250000;
const specialCategoryPercent = 0.03;
const otherCategoryPurchases = 700000;
const otherCategoryPercent = 0.01;
const specialCategoryCashback = specialCategoryPurchases * specialCategoryPercent;
const otherCategoryCashback = otherCategoryPurchases * otherCategoryPercent;
let totalCashback = specialCategoryCashback + otherCategoryCashback;
const limit = 15000;
if (totalCashback > limit){
    totalCashback = limit;
}
console.log(totalCashback);
