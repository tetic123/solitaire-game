class Deck {
    // index 0 is the card on top of the deck when faced down
    constructor(solitaire) {
        this.container = document.createElement('div');
        this.container.classList.add('deck');
        this.cards = [];

        for(let suit in solitaire.SUIT) {
            for(let i = 1; i <= 13; i++){
                const card = new Card(solitaire.SUIT[suit], i)
                this.cards.push(card);
            }
        }
    }
    renderCards() {
        this.container.innerHTML = "";
        for(let i in this.cards) {
            const card = this.cards[i];
            this.container.insertAdjacentElement('beforeend', card.container);
        }
    }
    shuffle() {
        for(let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
        }        
        this.renderCards();
    }
    drawCard() {
        return this.cards.shift()
    }
}
