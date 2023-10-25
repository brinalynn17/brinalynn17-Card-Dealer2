https://brinalynn17.github.io/brinalynn17-Card-Dealer2/


# brinalynn17-Card-Dealer
Random Card Dealer in JavaScript, HTML and CSS
In this project, you will learn how to change your website styles during the runtime using VanillaJS (plain normal js).

📝 Instructions
Create an algorithm that randomly builds a card on every refresh:

Every time the website refreshes a new random card needs to show.

The card must have one of the possible suits: Hearts, Spades, Clubs and Diamonds.

The card value must be one of the following: 2 to 10, King, Queen, Jack or Ace, (no joker).

💡 Hints
Remember that the first event of a website lifecycle is onLoad (your code starts running there). You should generate a random number between 1 and 4 to pick a suit and another random number between 0 and 12 to pick a card number.

Create a general .card class that applies the general styles to each card, and one additional CSS class for each suit: .spade, .club, .heart & .diamond.

Apply the .card class to the entire div, but only apply one of the suit classes at a time, depending on what suit you want to apply. For example, a 3 of Hearts will have this HTML declaration:
