// Declaram variabila pentru valoarea curentă a contorului
let counterValue = 0;

// Selectăm elementele din DOM
const valueSpan = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

// Funcția pentru actualizarea valorii pe interfață
function updateCounter() {
  valueSpan.textContent = counterValue; 
}

// Handler pentru butonul de decrementare
decrementButton.addEventListener('click', () => {
  counterValue -= 1; 
  updateCounter();   
});

// Handler pentru butonul de incrementare
incrementButton.addEventListener('click', () => {
  counterValue += 1; 
  updateCounter(); 
});