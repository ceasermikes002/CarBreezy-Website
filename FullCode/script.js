let MenuBtn=document.querySelector("#MenuBtn")
let Navbar=document.querySelector("navbar")

MenuBtn.onclick=()=>{
  MenuBtn.classList.toogle("fas fa-times");
  Navbar.classList.toggle("active")
}

function changeColor(menuItem) {
  menuItem.style.color = '#819830'; // set the color to red
}


// LoginForm
// document.querySelector("#LoginBtn").onclick=()=>{
// document.querySelector(".loginFormContainer").classList.toggle("active");
// };
// Get the login button and the login form container

const loginBtn = document.querySelector('#LoginBtn button');
const loginFormContainer = document.querySelector('.loginFormContainer');

// Add a click event listener to the login button
loginBtn.addEventListener('click', () => {
  // Toggle the active class on the login form container to show/hide it
  loginFormContainer.classList.toggle('active');
});

// Get the close button and add a click event listener to hide the login form
const closeBtn = document.querySelector('#CloseLoginForm');
closeBtn.addEventListener('click', () => {
  // Remove the active class to hide the login form
  loginFormContainer.classList.remove('active');
});
// Site View Count
// Get the counter element
const counter = document.getElementById('counter');

// Get the current count from the element's innerHTML
let count = parseInt(counter.innerHTML);

// Increment the count
count++;

// Update the counter element with the new count
counter.innerHTML = count.toString();


// CAR GALLERY

// Get the popup element and the close button
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');

// Get all the gallery items and add a click event listener to each one
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Display the popup and set the image and price
    popup.style.display = 'block';
    const carImage = popup.querySelector('.carImage img');
    carImage.src = this.querySelector('img').src;
    const carPrice = popup.querySelector('.carPrice p');
    carPrice.innerText = 'Price: $50,000'; // Replace with actual price

    // Set the first tab as active and show its content
    const firstTab = popup.querySelector('.carTabs li');
    firstTab.classList.add('active');
    const firstTabContent = popup.querySelector('#internal');
    firstTabContent.classList.add('active');
  });
});

// Add a click event listener to the close button to hide the popup
closePopupButton.addEventListener('click', function() {
  popup.style.display = 'none';
});

// Gallery end
// Car PopUp Tab
// Add click event listeners to the tab buttons to switch between tabs
const tabButtons = popup.querySelectorAll('.carTabs li');
tabButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove the active class from all buttons and tab contents
    tabButtons.forEach(function(tab) {
      tab.classList.remove('active');
    });
    const tabContents = popup.querySelectorAll('.tabContent');
    tabContents.forEach(function(content) {
      content.classList.remove('active');
    });

    // Add the active class to the clicked button and show its content
    const clickedTab = this;
    clickedTab.classList.add('active');
    const correspondingTab = popup.querySelector('#' + clickedTab.getAttribute('data-tab'));
    correspondingTab.classList.add('active');
  });
});

  function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("carTabs")[0].getElementsByTagName("li");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementsByClassName("carTabs")[0].getElementsByTagName("li")[0].click();

  // Like Button Animation
  // get the like button element
var likeButton = document.querySelector('.likeButton');

// add event listener to the like button
likeButton.addEventListener('click', function() {
  // toggle the liked class on the like button element
  this.classList.toggle('liked');

  // check if the like button is currently liked
  if (this.classList.contains('liked')) {
    // change the background color of the like button to green
    this.style.backgroundColor = '#819830';
  } else {
    // change the background color of the like button back to the default color
    this.style.backgroundColor = '';
  }
});







// const loginBtn2 = document.querySelector('.gallery-item');
// const loginFormContainer2 = document.querySelector('.loginFormContainer2');

// // Add a click event listener to the login button
// loginBtn2.addEventListener('click', () => {
//   // Toggle the active class on the login form container to show/hide it
//   loginFormContainer2.classList.toggle('active');
// });

// // Get the close button and add a click event listener to hide the login form
// const closeBtn2 = document.querySelector('#CloseLoginForm2');
// closeBtn2.addEventListener('click', () => {
//   // Remove the active class to hide the login form
//   loginFormContainer2.classList.remove('active');
// });
// Car gallery End

// const homeImage = document.getElementById("homeImage");
// const homeText = document.getElementById("homeText");


// Mouse movement effect
// document.addEventListener("mousemove", function(event) {
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;

//   const offsetX = window.innerWidth / 2 - mouseX;
//   const offsetY = window.innerHeight / 2 - mouseY;

//   const imgMoveX = offsetX * -0.02;
//   const imgMoveY = offsetY * -0.02;

//   const textMoveX = offsetX * 0.02;
//   const textMoveY = offsetY * 0.02;

//   homeImage.style.transform = `translate(${imgMoveX}px, ${imgMoveY}px)`;
//   homeText.style.transform = `translate(${textMoveX}px, ${textMoveY}px)`;
// });

// const homeSection = document.getElementById('Home');
// const homeImage = document.getElementById('homeImage');
// const homeHeading = document.getElementById('homeHeading');

// const followMouse = (event) => {
//   // Calculate the position of the mouse relative to the center of the home section
//   const mouseX = event.clientX - (homeSection.offsetLeft + homeSection.offsetWidth / 2);
//   const mouseY = event.clientY - (homeSection.offsetTop + homeSection.offsetHeight / 2);

//   // Set the position of the home image based on the mouse position
//   homeImage.style.transform = `translate(${mouseX / 10}px, ${mouseY / 10}px)`;

//   // Set the position of the home heading in the opposite direction of the mouse position
//   homeHeading.style.transform = `translate(${-mouseX / 20}px, ${-mouseY / 20}px)`;
// };

// const stopFollowingMouse = () => {
//   // Reset the position of the home image and heading when the mouse leaves the home section
//   homeImage.style.transform = '';
//   homeHeading.style.transform = '';
// };

// homeSection.addEventListener('mousemove', followMouse);
// homeSection.addEventListener('mouseleave', stopFollowingMouse);
// get the home section, image, and h3 elements
const homeSection = document.getElementById("Home");
const homeImage = homeSection.querySelector("img");
const homeHeading = homeSection.querySelector("h3");

// define the mousemove event handler
function handleMouseMove(event) {
  // get the mouse position relative to the center of the home section
  const bounds = homeSection.getBoundingClientRect();
  const mouseX = event.clientX - (bounds.left + bounds.width / 2);
  const mouseY = event.clientY - (bounds.top + bounds.height / 2);

  // set the image position to follow the mouse direction at a speed of 0.1
  homeImage.style.transform = `translate(${mouseX * 0.1}px, ${mouseY * 0.1}px)`;

  // set the heading position to go in the opposite direction at a speed of -0.05
  homeHeading.style.transform = `translate(${-mouseX * 0.05}px, ${-mouseY * 0.05}px)`;
}

// add the mousemove event listener to the home section
homeSection.addEventListener("mousemove", handleMouseMove);

// define the mouseleave event handler to reset the image and heading positions
function handleMouseLeave() {
  homeImage.style.transform = "";
  homeHeading.style.transform = "";
}

// add the mouseleave event listener to the home section
homeSection.addEventListener("mouseleave", handleMouseLeave);

// Home section end................

// Swiper Js for vehicle slider
// Initialize the swiper slider
// Initialize the swiper slider
var swiper = new Swiper('.vehicle-slider', {
  grabCursor:true,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000, // Set the delay to 5 seconds
    disableOnInteraction: false, // Enable autoplay even when the user interacts with the slider
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Pause the autoplay when the mouse is hovered over the slider
var sliderContainer = document.querySelector('.vehicle-slider');
sliderContainer.addEventListener('mouseenter', function() {
  swiper.autoplay.stop();
});
sliderContainer.addEventListener('mouseleave', function() {
  swiper.autoplay.start();
});

// Swiper JS for Featured slider
var swiper=new  Swiper(".FeaturesSlider",{
  grabCursor:true,
  spaceBetween:20,
  centeredSlides:true,
  loop:true,
  autoplay:{
    delay:5000,
    disableOnInteraction:false,
  },
  pagination:{
    el:".swiper-paginatin",
    clickable:true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // This is for responsive
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    768:{
      slidesPerView:2
    },
    1024:{
      slidesPerView:3
    },
  }
})
// Swiper JS for Review slider
// var swiper=new  Swiper(".ReviewSlider",{
//   grabCursor:true,
//   spaceBetween:20,
//   centeredSlides:true,
//   loop:true,
//   autoplay:{
//     delay:5000,
//     disableOnInteraction:false,
//   },
//   pagination:{
//     el:".swiper-pagination",
//     clickable:true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   // This is for responsive
//   breakpoints:{
//     0:{
//       slidesPerView:1,
//     },
//     768:{
//       slidesPerView:2
//     },
//     1024:{
//       slidesPerView:3
//     },
//   }
// })
// Initialize Swiper
const mySwiper = new Swiper('.ReviewSlider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor:true,
  centeredSlides:true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Enable keyboard navigation
  keyboard: {
    enabled: true,
  },

  // Enable mousewheel navigation
  mousewheel: {
    enabled: false,
  },

  // Automatically slide after 3 seconds
  autoplay: {
    delay: 3000,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    0:{
      slidesPerView:1,
      spaceBetween:20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

function updateTicker() {
  var now = new Date();
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();
  
  // Get the user's location
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var locationStr = "Lat: " + latitude.toFixed(2) + ", Long: " + longitude.toFixed(2);
    
    // Display the date, time, and location in the ticker
    var tickerElem = document.getElementById("ticker");
    tickerElem.textContent = date + " " + time + " | " + locationStr;
  });
}


// Update the ticker every second
setInterval(updateTicker, 1000);

