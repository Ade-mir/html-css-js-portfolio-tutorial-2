function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function autoScroll() {
  // Set the delay (in milliseconds) after which you want to scroll
  var scrollDelay = 1750; // Adjust this value as needed (5000 milliseconds = 5 seconds)

  setTimeout(function() {
    // Calculate the new scroll position or use any logic you need
    var newScrollPosition = window.scrollY + window.innerHeight;

    // Scroll to the new position
    window.scrollTo({
      top: newScrollPosition,
      behavior: 'smooth' // Use smooth scrolling for a better user experience
    });

  }, scrollDelay);
}

// Call the autoScroll function when the page is loaded
window.addEventListener('load', autoScroll);



