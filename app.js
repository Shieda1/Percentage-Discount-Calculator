// https://calculator.swiftutors.com/declining-balance-depreciation-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const priceafterdiscountRadio = document.getElementById('priceafterdiscountRadio');
const pricebeforediscountRadio = document.getElementById('pricebeforediscountRadio');
const discountRadio = document.getElementById('discountRadio');

let priceafterdiscount;
let pricebeforediscount = v1;
let discount = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

priceafterdiscountRadio.addEventListener('click', function() {
  variable1.textContent = 'Price before discount';
  variable2.textContent = 'Discount';
  pricebeforediscount = v1;
  discount = v2;
  result.textContent = '';
});

pricebeforediscountRadio.addEventListener('click', function() {
  variable1.textContent = 'Price after discount';
  variable2.textContent = 'Discount';
  priceafterdiscount = v1;
  discount = v2;
  result.textContent = '';
});

discountRadio.addEventListener('click', function() {
  variable1.textContent = 'Price after discount';
  variable2.textContent = 'Price before discount';
  priceafterdiscount = v1;
  pricebeforediscount = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(priceafterdiscountRadio.checked)
    result.textContent = `Price after discount = ${computepriceafterdiscount().toFixed(2)}`;

  else if(pricebeforediscountRadio.checked)
    result.textContent = `Price before discount = ${computepricebeforediscount().toFixed(2)}`;

  else if(discountRadio.checked)
    result.textContent = `Discount = ${computediscount().toFixed(2)}`;
})

// calculation

function computepriceafterdiscount() {
  return Number(pricebeforediscount.value) - (Number(pricebeforediscount.value) * (Number(discount.value) / 100));
}

function computepricebeforediscount() {
  return Number(priceafterdiscount.value) / Number(discount.value);
}

function computediscount() {
  return ((Number(pricebeforediscount.value) - Number(priceafterdiscount.value)) / Number(discount.value)) * 100;
}