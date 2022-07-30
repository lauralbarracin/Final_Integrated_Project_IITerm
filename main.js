const getDiscountBtn = document.querySelector(".get-discount-btn");
const couponContainer = document.querySelector(".coupon-container");
const closeBtn = document.querySelector(".coupon-container .close");
const newOfferBtn = document.querySelector(".newOfferBtn");
const comingSoonBtn = document.querySelector(".comingSoonBtn");

const discount = document.getElementById('discount');
const code = document.getElementById('code');

getDiscountBtn.addEventListener("click", () => {
  discount.innerText = '50% off';
  code.innerText = 'JI7FB98D';
  couponContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  couponContainer.classList.remove("active");
});


newOfferBtn.addEventListener("click", () => {
  discount.innerText = '30% off';
  code.innerText = 'SM23KN0L';
  couponContainer.classList.add("active");
});


comingSoonBtn.addEventListener("click", () => {
  discount.innerText = '75% off';
  code.innerText = 'LBSAVE75';
  couponContainer.classList.add("active");
});