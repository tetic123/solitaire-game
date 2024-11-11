class OrderedCards {
    constructor(solitaire) {
        this.container = document.createElement('div');
        this.container.classList.add('ordered-cards');
        this.data = {}
        for(let suit in solitaire.SUIT) {
            const suitString = solitaire.SUIT[suit];
            this.data[suitString] = {
                "container": document.createElement('div'),
                "cards": []
            }
            this.data[suitString].container.classList.add('suit-' + suitString);
            const suitIcon = document.createElement('i');
            suitIcon.classList.add('mdi', 'mdi-cards-' + suitString  + '-outline');
            this.data[suitString].container.insertAdjacentElement('beforeend', suitIcon);
            this.container.insertAdjacentElement('beforeend', this.data[suitString].container)
        }
    }
}
