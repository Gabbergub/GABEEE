
  const icons = document.querySelectorAll('.icon');
  icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      const src = icon.src;
      icon.src = '';       // Remove the src
      icon.src = src;      // Re-assign it to force reload
    });
  });
