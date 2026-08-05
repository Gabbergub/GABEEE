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



const cursor = document.querySelector('.custom-cursor');

// Show and move cursor
document.addEventListener('mousemove', e => {
  cursor.style.opacity = 1;
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});



// Trail of 5 black arrow cursors chasing the main blue cursor
(function () {
  var trailEls = Array.prototype.slice.call(document.querySelectorAll('.cursor-trail'));
  var trailOpacity = [0.8, 0.6, 0.42, 0.26, 0.12];
  var trailPos = trailEls.map(function () { return { x: 0, y: 0 }; });
  var mouseX = 0, mouseY = 0;
  var started = false;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!started) {
      started = true;
      trailPos.forEach(function (p) { p.x = mouseX; p.y = mouseY; });
    }
    trailEls.forEach(function (el, i) { el.style.opacity = trailOpacity[i]; });
  });

  document.addEventListener('mouseout', function () {
    trailEls.forEach(function (el) { el.style.opacity = 0; });
  });

  function animateTrail() {
    var targetX = mouseX, targetY = mouseY;
    var ease = 0.35; // how quickly each dot catches up to the one ahead of it
    trailPos.forEach(function (p, i) {
      p.x += (targetX - p.x) * ease;
      p.y += (targetY - p.y) * ease;
      var el = trailEls[i];
      if (el) {
        el.style.left = p.x + 'px';
        el.style.top = p.y + 'px';
      }
      targetX = p.x;
      targetY = p.y;
    });
    requestAnimationFrame(animateTrail);
  }
  requestAnimationFrame(animateTrail);
})();