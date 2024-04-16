document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('calculateButton').addEventListener('click', calculateQuote);
});

function calculateQuote() {
  const inputAmount = parseFloat(document.getElementById('quoteInput').value);
  if (isNaN(inputAmount)) {
    document.getElementById('output').textContent = "Please enter a valid number.";
    return;
  }

  let finalQuote = inputAmount * 2.5;

  // Add an extra $20 for quotes smaller than $30 after multiplying
  if (finalQuote < 30) {
    finalQuote += 20;
  }

  document.getElementById('output').textContent = `The final quote is: $${finalQuote.toFixed(2)}`;
}
