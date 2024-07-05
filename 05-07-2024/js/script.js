let range = document.querySelector("#range");
let Range = document.querySelector("#rangeValue");

range.addEventListener("input", function() {
rangeValue.textContent = range.value;
});