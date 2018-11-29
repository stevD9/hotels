window.addEventListener("load", function(){

  // Set the variables for the range input

  let rangeElement = document.getElementById("price-filter");
  let max = document.getElementById("max");
  max.innerHTML = rangeElement.value;

  // Set the max price on the label

  rangeElement.addEventListener("input",function(){
    max.innerHTML = rangeElement.value;
  });

  // Set variable for the list with the deals object

  const $deals = $("#hotels .deals li");

  // CLick function to show the details of the clicked deal element on the right (aside) preview of the page

    $deals.click(function(e){

      let $hotel = $(e.currentTarget).children(".hotel-site");

      let $hotelPrice = $(e.currentTarget).children(".cost");

      let $hotelPreview = $(e.currentTarget).closest(".deals").next(".selection").find(".hotel-site");

      let $pricePreview = $(e.currentTarget).closest(".deals").next(".selection").find(".cost");

      $($hotelPreview).html($($hotel).html());
      $($pricePreview).html($($hotelPrice).html());

    });

});
