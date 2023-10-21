const suits = ['❤️','♠️', '♣️', '♦️'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'King', 'Queen', 'Jack', 'Ace'];

function getRandomCard() {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    return { suit: randomSuit, value: randomValue };
}

function displayRandomCard() {
    const card = getRandomCard();
    const suitElement = document.getElementById('suit');
    const valueElement = document.getElementById('value');

    suitElement.textContent = card.suit;
    valueElement.textContent = card.value;
}

const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', displayRandomCard);

// Initial card display on page load
displayRandomCard();