let toggle = document.querySelector('.toggle-theme');

toggle.addEventListener('click', function(e) {
  e.preventDefault();

  if (document.body.classList.contains('funky')) {
    // Turning the theme off:
    document.body.classList.remove('funky');
    // Reverse logic on the button text, so that users can turn
    // the theme back on:
    toggle.innerText = 'Turn theme on';
  } else {
    document.body.classList.add('funky');
    toggle.innerText = 'Turn theme off';
  }
});