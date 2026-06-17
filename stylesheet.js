// Animate .scroll up and down and fade out on scroll
document.addEventListener('DOMContentLoaded', function() {
  const scrollEl = document.querySelector('.scroll');
  if (scrollEl) {
    // Animate up and down
    scrollEl.animate([
      { transform: 'translateY(0px)' },
      { transform: 'translateY(15px)' },
      { transform: 'translateY(0px)' }
    ], {
      duration: 1500,
      iterations: Infinity
    });

    // Fade out on scroll
    window.addEventListener('scroll', function() {
      const fadeStart = 50; // px from top to start fading
      const fadeEnd = 200; // px from top to be fully faded
      const scrollY = window.scrollY || window.pageYOffset;
      let opacity = 1;
      if (scrollY > fadeStart) {
        opacity = 1 - Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
      }
      scrollEl.style.opacity = opacity;
      scrollEl.style.pointerEvents = opacity === 0 ? 'none' : '';
    });
  }
});

  const icons = document.querySelectorAll('.icon');
  icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      const src = icon.src;
      icon.src = '';       // Remove the src
      icon.src = src;      // Re-assign it to force reload
    });
  });


  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




//Hamburger menu ///
  function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
  }


