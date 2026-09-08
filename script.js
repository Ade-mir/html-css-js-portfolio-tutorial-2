function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark Mode Toggle
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Initialize theme on page load
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

// Typing Animation
function initializeTypingAnimation() {
  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;

  const texts = ['Software Engineer', 'CS Student @ UW', 'DoorDash SWE Intern'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      // Pause at end of word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  // Start typing animation
  type();
}

function initializeAnimations() {
  // Select both timeline items and fade-animate elements
  const animatedElements = document.querySelectorAll('.timeline-item, .fade-animate');
  
  if (animatedElements.length === 0) return;

  // Set initial state for all elements
  animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.6s ease-out';
  });

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Fade in when visible
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          } else {
              // Fade out when not visible
              entry.target.style.opacity = '0';
              entry.target.style.transform = 'translateY(20px)';
          }
      });
  }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
  });

  // Observe all elements
  animatedElements.forEach(element => {
      observer.observe(element);
  });
}


// Skill Bar Animation - set progress values for hover effect
function initializeSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');

  if (skillBars.length === 0) return;

  // Set the CSS variable for each skill bar based on data-progress attribute
  skillBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.setProperty('--progress', `${progress}%`);
  });
}

// viewer Test


// function animateValue(element, oldValue, newValue) {
//     // Clear previous content
//     element.innerHTML = '';
    
//     // Convert to string and create element for the number
//     const number = newValue.toString();
//     const digitSpan = document.createElement('span');
//     digitSpan.className = 'counter-digit';
//     digitSpan.textContent = number;
    
//     // Add slide-up animation
//     digitSpan.style.transform = 'translateY(20px)';
//     digitSpan.style.opacity = '0';
//     element.appendChild(digitSpan);
    
//     // Trigger animation
//     setTimeout(() => {
//         digitSpan.style.transform = 'translateY(0)';
//         digitSpan.style.opacity = '1';
//     }, 50);
// }

// function initCounter() {
//     const counterElement = document.getElementById('counter');
//     let visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
    
//     // Animate from previous count to new count
//     animateValue(counterElement, visitorCount, visitorCount + 1);
    
//     // Update stored count
//     localStorage.setItem('visitorCount', (visitorCount + 1).toString());
// }

// // Initialize when page loads
// window.addEventListener('load', initCounter);

  


document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  initializeAnimations();
  initializeTypingAnimation();
  initializeSkillBars();
});



