'use strict';
function calculateCashback(specialCategoryPurchases, otherCategoryPurchases){
    const specialCategoryPercent = 0.03;
    const otherCategoryPercent = 0.01;
    const specialCategoryCashback = specialCategoryPurchases * specialCategoryPercent;
    const otherCategoryCashback = otherCategoryPurchases * otherCategoryPercent;
    let totalCashback = specialCategoryCashback + otherCategoryCashback;
    const limit = 10000;
    return {
        specialCategoryCashback,
        otherCategoryCashback,
        totalCashback: totalCashback > limit ? limit : totalCashback,
    };
}
// const specialCategoryPurchases = 250000;
// const otherCategoryPurchases = 700000;
const cashback = calculateCashback(5000, 10000);
console.log(cashback);
