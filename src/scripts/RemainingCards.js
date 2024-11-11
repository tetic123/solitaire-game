class RemainingCards {
    constructor(solitaire) {
        this.container = document.createElement('div');
        this.container.classList.add('remaining-cards');

        this.cardsSelection = document.createElement('div');
        this.cardsSelection.classList.add('card-selection');

        this.deck = new Deck(solitaire);

        this.container.insertAdjacentElement('beforeend', this.cardsSelection);
        this.container.insertAdjacentElement('beforeend', this.deck.container)
    }
}
