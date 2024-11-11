class Card {
    FACE_CARDS = {
        '1': 'A',
        '11': 'J',
        '12': 'Q',
        '13': 'K'
    }
    constructor(suit, value, visible) {
        this.suit = suit;
        this.value = value;
        this.visible = false;

        this.container = document.createElement('div');
        this.container.classList.add('card', 'suit-' + this.suit);

        const inner = document.createElement('div');
        inner.classList.add('inner');
        const front = document.createElement('div');
        front.classList.add('front');
        const topSymbol = document.createElement('div');
        const suitIcon = document.createElement('i');
        suitIcon.classList.add('mdi', 'mdi-cards-' + this.suit);
        const valueIcon = document.createElement('span');
        valueIcon.textContent = (Object.keys(this.FACE_CARDS).indexOf(this.value + '') === -1 ? value : this.FACE_CARDS[value])
        topSymbol.insertAdjacentElement('beforeend', valueIcon);
        topSymbol.insertAdjacentElement('beforeend', suitIcon);
        front.insertAdjacentElement('beforeend', topSymbol);
        const centerSymbol = suitIcon.cloneNode();
        front.insertAdjacentElement('beforeend', centerSymbol);
        const bottomSymbol = topSymbol.cloneNode(true);
        front.insertAdjacentElement('beforeend', bottomSymbol);
        inner.insertAdjacentElement('beforeend', front)

        const back = document.createElement('div');
        back.classList.add('back');
        inner.insertAdjacentElement('beforeend', back)
        this.container.insertAdjacentElement('beforeend', inner);
        this.flipClass()
    }
    flip() {
        this.visible = !this.visible;
        this.flipClass();
    }
    flipClass() {
        if(this.visible) {
            this.container.classList.remove('hidden')
        } else {
            this.container.classList.add('hidden')
        }
    }
}