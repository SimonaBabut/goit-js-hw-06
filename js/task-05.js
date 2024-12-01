// Selectăm elementele din DOM
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Adăugăm un event listener pentru evenimentul 'input'
nameInput.addEventListener('input', () => {
  // Verificăm dacă input-ul este gol
  if (nameInput.value.trim() === "") {
    // Dacă este gol, setăm textul la "Anonymous"
    nameOutput.textContent = "Anonymous";
  } else {
    // Dacă există text, actualizăm textul cu valoarea input-ului
    nameOutput.textContent = nameInput.value;
  }
});