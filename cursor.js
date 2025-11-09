document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".custom-cursor");
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
  cursor.style.opacity = 1; // Make visible on screen


  // Hide cursor when the mouse leaves the viewport
  const hideCursor = () => {
    cursor.classList.add("hidden");
  };

  // Show cursor when the mouse re-enters the viewport
  const showCursor = () => {
    cursor.classList.remove("hidden");
  };

  // Attach event listeners
  document.addEventListener("mousemove", moveCursor);
  document.addEventListener("mouseout", hideCursor);
  document.addEventListener("mouseover", showCursor);

});



//hover expansion effect for specific elements
const cursor = document.querySelector('.custom-cursor');

// Show and move cursor
document.addEventListener('mousemove', e => {
  cursor.style.opacity = 1;
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Add hover effect for links
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => cursor.classList.add('link-hover'));
  link.addEventListener('mouseleave', () => cursor.classList.remove('link-hover'));
});


