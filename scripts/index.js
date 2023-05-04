"use strict";

window.onload = function () {
  const submitBtnEl = document.getElementById("submitBtn");
  submitBtnEl.onclick = onSubmitBtnClicked;
  let cupChecked = document.getElementById("cup");
  cupChecked.onchange = onHideOrShowUnderToppings;
  let coneChecked = document.getElementById("cone");
  coneChecked.onchange = onHideOrShowUnderToppings;
};

function onHideOrShowUnderToppings() {
  const toppingsBoxEl = document.getElementById("toppingsBox");
  if (document.getElementById("cup").checked) {
    toppingsBoxEl.style.display = "block";
  } else {
    toppingsBoxEl.style.display = "none";
  }
}

function onSubmitBtnClicked() {
  const numberScoopsEl = +document.getElementById("numberScoops").value;
  //extra cups
  let extraCup = 0;
  if (numberScoopsEl == 1) {
    extraCup = 0;
  } else if (numberScoopsEl == 2) {
    extraCup = 1;
  } else if (numberScoopsEl == 3) {
    extraCup = 2;
  } else {
    extraCup = 3;
  }
  //toppings
  let extraTopping = 0;
  if (document.getElementById("sprinkles").checked) {
    extraTopping += 0.5;
  }
  if (document.getElementById("whippedCream").checked) {
    extraTopping += 0.25;
  }
  if (document.getElementById("hotFudge").checked) {
    extraTopping += 1.95;
  }
  if (document.getElementById("cherry").checked) {
    extraTopping += 0.25;
  }

  const priceConeCup = extraCup * 1.25 + 2.25 + extraTopping;
  const tax = 0.04 * priceConeCup;
  const total = priceConeCup + tax;
  //totals
  const basePriceEl = document.getElementById("basePrice");
  basePriceEl.value = priceConeCup.toFixed(2);
  const taxPriceEl = document.getElementById("taxPrice");
  taxPriceEl.value = tax.toFixed(2);
  const totalDueEl = document.getElementById("totalDue");
  totalDueEl.value = total.toFixed(2);
}

// number of scoops= numberScoops
//radio
//cone
//cup
//checkbox
//sprinkles .50
// whippedCream .25
// hotFudge 1.95
// cherry .25
// totals
//basePrice
//taxPrice
//totalDue
