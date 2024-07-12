let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("activeData");
//   console.log(ul);
if(ul.className == "activeData"){
    document.getElementById("menu").className = "fa-solid fa-xmark"
}else document.getElementById("menu").className = "fa-solid fa-bars"
});
// Join Us Button Functionility
document.getElementById('joinButton').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

document.getElementById('membershipForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  // Here you can handle form submission, e.g., validate inputs, send data to server, etc.
  alert('Form submitted successfully!');
  document.getElementById('popup').style.display = 'none'; // Hide popup after submission
});
// For Carousel Image Slider
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
          document.getElementById('slider').style.setProperty('--index', index);
      });
  });

  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + 4) % 4;
      document.getElementById('btn' + (currentIndex + 1)).checked = true;
      document.getElementById('slider').style.setProperty('--index', currentIndex);
  });

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % 4;
      document.getElementById('btn' + (currentIndex + 1)).checked = true;
      document.getElementById('slider').style.setProperty('--index', currentIndex);
  });
});
