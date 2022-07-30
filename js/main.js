const getDiscountBtn = document.querySelector(".get-discount-btn");
const couponContainer = document.querySelector(".coupon-container");
const closeBtn = document.querySelector(".coupon-container .close");
const newOfferBtn = document.querySelector(".newOfferBtn");
const comingSoonBtn = document.querySelector(".comingSoonBtn");



getDiscountBtn.addEventListener("click", () => {
  couponContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  couponContainer.classList.remove("active");
});


newOfferBtn.addEventListener("click", () => {
  couponContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  couponContainer.classList.remove("active");
});


comingSoonBtn.addEventListener("click", () => {
  couponContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  couponContainer.classList.remove("active");
});