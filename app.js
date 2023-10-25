window.onload = function() {
    const suits = ['heart', 'spade', 'club', 'diamond'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'King', 'Queen', 'Jack', 'Ace'];
    // Generate a random card on page load
    generateRandomCard();

    function generateRandomCard() {
        const randomSuit = suits[Math.floor(Math.random() * 4)]; // 0-3
        const randomValue = values[Math.floor(Math.random() * 13)]; // 0-12
    
        const topSuit = document.getElementById('top-left-suit');
        topSuit.innerHTML = getSuitIcon(randomSuit);
        topSuit.classList.remove('heart-suit', 'diamond-suit'); // Remove previous classes
        if (randomSuit === 'heart' || randomSuit === 'diamond') {
            topSuit.classList.add(randomSuit + '-suit');
        }
    
        const bottomSuit = document.getElementById('bottom-right-suit');
        bottomSuit.innerHTML = getSuitIcon(randomSuit);
        bottomSuit.classList.remove('heart-suit', 'diamond-suit'); // Remove previous classes
        if (randomSuit === 'heart' || randomSuit === 'diamond') {
            bottomSuit.classList.add(randomSuit + '-suit');
        }
    
        const cardValue = document.getElementById('card-value');
        cardValue.innerHTML = randomValue;
        cardValue.classList.remove('red-value'); // Remove previous class
        if (randomSuit === 'heart' || randomSuit === 'diamond') {
            cardValue.classList.add('red-value'); // Add class for red values
        }
    
        const card = document.getElementById('card');
        card.className = 'card ' + randomSuit;
    }
     function getSuitIcon(suit) {
        switch (suit) {
            case 'heart':
                return '♥';
            case 'spade':
                return '♠';
            case 'club':
                return '♣';
            case 'diamond':
                return '♦';
        }
    }
    const generateButton = document.getElementById('generate-button');
    generateButton.addEventListener('click', generateRandomCard);
};
