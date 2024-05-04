window.onload = function (){
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.navigation');
  
    menu_btn.addEventListener('click', function() {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
    });
  }







  
  document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelector('.slides');
    let scrollAmount = 0;
    const slideWidth = 200; // Adjust this value to match the width of each slide
    
    // Function to scroll to the previous slide
    prevBtn.addEventListener('click', function() {
      if (scrollAmount !== 0) {
        scrollAmount -= slideWidth;
        smoothScrollTo(slides, scrollAmount, 500); // Adjust the duration (500ms) as needed
      }
    });
    
    // Function to scroll to the next slide
    nextBtn.addEventListener('click', function() {
      if (scrollAmount < slides.scrollWidth - slides.clientWidth) {
        scrollAmount += slideWidth;
        smoothScrollTo(slides, scrollAmount, 500); // Adjust the duration (500ms) as needed
      }
    });
    
    // Function for smooth scrolling animation
    function smoothScrollTo(element, to, duration) {
      const start = element.scrollLeft;
      const change = to - start;
      let currentTime = 0;
      const increment = 20; // Adjust the scroll speed by changing the increment value
      
      function animateScroll() {
        currentTime += increment;
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollLeft = val;
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      }
      
      animateScroll();
    }
    
    // Easing function for smooth animation
    Math.easeInOutQuad = function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  });
  function showText(element) {
    var overlay = element.querySelector('.text-overlay');
    if (overlay) {
      overlay.style.opacity = '1';
    }
  }
  
  // Function to hide text overlay
  function hideText(element) {
    var overlay = element.querySelector('.text-overlay');
    if (overlay) {
      overlay.style.opacity = '0';
    }
  }
  
  