window.addEventListener("load", function(){

  // Set the variables for the range input

  let rangeElement = document.getElementById("price-filter");
  let maxPrice = document.getElementById("max");
  maxPrice.innerHTML = rangeElement.value;

  // Set the max price on the price label

  rangeElement.addEventListener("input",function(){
    maxPrice.innerHTML = rangeElement.value;
  });

  // Set variable for the list with the deals object

  const $deals = $("#hotels .deals li");

  // CLick function to show the details of the clicked deal element on the right (aside) preview of the page

  $deals.click(function(e){

    let $hotel = $(this).children(".hotel-site");

    let $hotelPrice = $(this).children(".cost");

    let $hotelPreview = $(this).closest(".deals").next(".selection").find(".hotel-site");

    let $pricePreview = $(this).closest(".deals").next(".selection").find(".cost");

    $($hotelPreview).html($($hotel).html());
    $($pricePreview).html($($hotelPrice).html());

  });

  // Set variables for the the favourite image

  const $favouriteImg = $(".img > img");
  const heartCheckedPath = "./images/favorite-checked.png"
  const heartUnCheckedPath = "./images/favorite.png";

// Function to change the color of the favourite image
// when clicked

  $favouriteImg.click(function() {
    if ($(this).attr("src") === heartUnCheckedPath) {
      $(this).attr("src", heartCheckedPath);
    } else {
      $(this).attr("src", heartUnCheckedPath);
    }
  });

  // function to add 0 in front of day and month
  // number

  function formatDate(d) {
    if (d<10) {
      d = "0" + d;
    }
    return d;
  }

  // set variables for checkin and checkout inputs

  const checkIn = document.getElementById("check-in");
  const checkOut = document.getElementById("check-out");

  // set the dafualt value and min of checkin
  // to today and plus one for checkout

  let today = new Date();
  let todayYYYY = today.getFullYear();
  let todayMM = formatDate(today.getMonth()+1);
  let todayDD = formatDate(today.getDate());
  let todayToString = `${todayYYYY}-${todayMM}-${todayDD}`;

  checkIn.value = todayToString;
  checkIn.min = todayToString;

  let checkoutDate = new Date(today);
  checkoutDate.setDate(checkoutDate.getDate()+1);
  let checkoutYYYY = checkoutDate.getFullYear();
  let checkoutMM = formatDate(checkoutDate.getMonth()+1);
  let checkoutDD = formatDate(checkoutDate.getDate());
  let checkoutToString = `${checkoutYYYY}-${checkoutMM}-${checkoutDD}`;

  checkOut.value = checkoutToString;
  checkOut.min = checkoutToString;

  // adapt checkout min and value to
  // checkin date

  checkIn.addEventListener("change", function(){
    let dateVariable = new Date(checkIn.value);
    dateVariable.setDate(dateVariable.getDate()+1);
    let yyyy = dateVariable.getFullYear();
    let mm = formatDate(dateVariable.getMonth()+1);
    let dd = formatDate(dateVariable.getDate());
    let dateToString = `${yyyy}-${mm}-${dd}`;
    checkOut.min = dateToString;
    if (checkIn.value === "") {
      checkOut.min = checkoutToString;
    }
  });

  // let $costInit = $(".selection-info > .cost");
  //
  // for (let i of $costInit) {
  //   console.log(i);
  //   i.html().split("$")[1];
  // }
  //
  //
  // const msInDay = 86400000;
  // const dateInputs = document.querySelectorAll("input[type = date]");
  //
  // for (let dateInput of dateInputs) {
  //   dateInput.addEventListener("change",function(){
  //     let checkInDate = new Date(checkIn.value);
  //     let checkOutDate = new Date(checkOut.value);
  //     let days = (checkOutDate-checkInDate)/msInDay;
  //     console.log(days);
  //   });
  // }

});
