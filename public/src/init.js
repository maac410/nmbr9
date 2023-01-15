import nmbrs from './nmbr.js'
import initBoard from './game.js'
import card from './card/card.js'

const boardCanvas = document.getElementById('canvas-game');

(function init() {
    initBoard(boardCanvas)
    console.log('INICIALIZANDO LA APP', nmbrs);
    card();
})()