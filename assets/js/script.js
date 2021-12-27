/* JavaScript codes for Guest Increment & Decrement */
function increment() {
  var value = parseInt(document.getElementById("guests").innerText) + 1;
  document.getElementById("guests").innerHTML = value;
}

function decrement() {
  var value = parseInt(document.getElementById("guests").innerText);
  if (value > 0) {
    value = parseInt(document.getElementById("guests").innerText) - 1;
    document.getElementById("guests").innerHTML = value;
  }
}

function guestUpdate() {
  var value = parseInt(document.getElementById("guests").innerText);
  document.getElementById("totalGuests").innerHTML = value;
}


/* JavaScript Code for initializing Hotel Datepicker */
var check_in = new HotelDatepicker(document.getElementById("check-in"));
console.log(check_in);


/* JavaScript Code for Range Slider */
window.onload = function () {
  slideOne();
  slideTwo();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 10000;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value + " ৳ ";
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value + " ৳ ";
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

function setSliderValue() {
  document.getElementById("price-range").innerHTML =
    sliderOne.value + " ৳ " + " - " + sliderTwo.value + " ৳ ";
}


/* JavaScript Code for Input Field Suggestion/Autocomplete */
const data = [
  {
    id: 503358,
    Name: "Province of Ragusa, Sicily, Italy",
    Count: 51,
    SlashName: "italy/sicily/province-of-ragusa-vacation-rentals/g100503358",
  },
  {
    id: 416298,
    Name: "Jerusalem, Jerusalem District, Israel",
    Count: 4,
    SlashName: "Israel/Jerusalem-vacation-rentals/g2579/",
  },
  {
    id: 407700,
    Name: "Jerusalem District, Israel",
    Count: 4,
    SlashName: "israel/jerusalem-district-vacation-rentals/g100407700",
  },
  {
    id: 686343,
    Name: "Marausa, Trapani, Italy",
    Count: 2,
    SlashName:
      "sicily/province-of-trapani/trapani/marausa-vacation-rentals/g100686343",
  },
  {
    id: 414003,
    Name: "Husafell, West Region, Iceland",
    Count: 2,
    SlashName: "iceland/west-region/husafell-vacation-rentals/g100414003",
  },
  {
    id: 414006,
    Name: "Husavik, Northeast Region, Iceland",
    Count: 2,
    SlashName: "iceland/northeast-region/husavik-vacation-rentals/g100414006",
  },
  {
    id: 574074,
    Name: "Llanddeusant, Anglesey, United Kingdom",
    Count: 1,
    SlashName:
      "wales/north-wales/anglesey/llanddeusant-vacation-rentals/g100574074",
  },
];

console.log(data.length);

let areas = [];

for (var i = 0; i < data.length; i++) {
  console.log(data[i].Name);

  areas.push(data[i].Name);
  console.log(areas);
}

let sortedData = areas.sort();

console.log(sortedData);

//Execute function on keyup
function generateSuggestion(str) {
  // console.log("Hello world");
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  for (let i of sortedData) {
    // console.log(i);
    //convert input to lowercase and compare with each string

    if (i.toLowerCase().startsWith(str.toLowerCase()) && str != "") {
      console.log(str.length);
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      let word = "<b>" + i.substr(0, str.length) + "</b>";
      word += i.substr(str.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
}
function displayNames(value) {
  let input = document.getElementById("location");
  input.value = value;
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}

function check_length(str) {
  // let str = document.getElementById("location").value;
  console.log(str);
  console.log(str.length);
  if (str.length >= 3) {
    console.log(str);
    generateSuggestion(str);
  } else {
    removeElements();
  }
}


/* JavaScript Code for displaying form data */
function showData() {
  window.alert(
    document.getElementById("location").value,
    <br />,
    document.getElementById("check-in").value
  );
}
