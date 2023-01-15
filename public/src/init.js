import nmbrs from './nmbr.js'
import initBoard from './game.js'

const boardCanvas = document.getElementById('board');

(function init() {
    initBoard(boardCanvas)
    console.log('INICIALIZANDO LA APP', nmbrs);
})()