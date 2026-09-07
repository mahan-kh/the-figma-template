document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('.desktop-nav');
  if (menu && nav) menu.addEventListener('click', () => nav.classList.toggle('is-open'));

  const form = document.querySelector('.newsletter form');
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('input');
    if (input && input.value.trim()) {
      input.value = '';
      alert('Thanks for subscribing!');
    }
  });
});
