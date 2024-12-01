
const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
  
  const requiredLength = parseInt(input.getAttribute('data-length'), 10);
  if (input.value.length === requiredLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});