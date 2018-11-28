window.addEventListener("load", function(){
  let rangeElement = document.getElementById("price-filter");
  let max = document.getElementById("max");

  rangeElement.addEventListener("input",function(){
    max.innerHTML = rangeElement.value;
  });
});
