class Solitaire {
    SUIT = ['spade', 'club', 'diamond', 'heart']
    constructor(container) {
        this.container = container;
        this.container.classList.add('solitaire-game')
        this.topbar = document.createElement('div');
        this.topbar.classList.add('top-bar');
        this.orderedCards = new OrderedCards(this);
        this.remainingCards = new RemainingCards (this);
        this.topbar.insertAdjacentElement('beforeend', this.orderedCards.container);
        this.topbar.insertAdjacentElement('beforeend', this.remainingCards.container);
        this.container.insertAdjacentElement('beforeend', this.topbar)

        this.board = document.createElement('div');
        this.board.classList.add('board');
        this.container.insertAdjacentElement('beforeend', this.board)

        this.slots = [];
        for (let i = 0; i < 7; i++) {
            const slot = new Slot();
            this.board.insertAdjacentElement('beforeend', slot.container)
            this.slots.push(slot)
        }

        this.remainingCards.deck.shuffle();

        let startingSlot = 0;
        let selectedSlot = startingSlot;
        let firstCard = true;
        while(selectedSlot < this.slots.length) {    
            const card = this.remainingCards.deck.drawCard();
            this.slots[selectedSlot].placeCard(card, firstCard);
            selectedSlot ++;
            if(firstCard) firstCard = false;
            
            if(selectedSlot === this.slots.length) {
                startingSlot ++;
                firstCard = true;
                selectedSlot = startingSlot;
            }
        }
    }
}
//где-то 1.40 на моменте, когда не отображались цифры на картах

