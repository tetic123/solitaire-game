class Slot {
    constructor(solitaire){
        this.container = document.createElement('div');
        this.container.classList.add('slot');
        this.cards = [];
    }
    placeCard(card, visible = false) {
        this.container.appendChild(card.container)
        this.cards.push(card);
        if(visible) card.flip()
    }
}
//1.32