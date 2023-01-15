import {NMBR_CARDS} from '../nmbr.js'

const elements = {
  cards: [],
  cardsEl: document.getElementById('cards'),
  deckEl: document.getElementById("deck")
}

function getCardEl({ color, number }) {
    return `
        <li>
            <section class="card" style="background-color: ${color}";>
            ${number}
            </section>
        </li>
    `
}

function addNmbrTwice(nmbr) {
    elements.cards.push(nmbr);
    elements.cards.push(nmbr);
}

function shuffleArr() {
    return Math.random() - 0.5;
}

function renderCard(card) {
    elements.cardsEl.innerHTML = getCardEl(card);
}

function getNmbr(){
    const card = elements.cards.pop();
    renderCard(card)
}


export default function init() {
  NMBR_CARDS.forEach(addNmbrTwice);
  elements.cards.sort(shuffleArr);

  elements.deckEl.addEventListener("click", () => {
    getNmbr();
    if(!elements.cards.length){
        elements.deckEl.remove();
    }
  })
}