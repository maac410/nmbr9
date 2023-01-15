import {setCanvasResolution, render, drawNmbr} from './render.js'
import Nmbr from './nmbr.js'

const SIZE_TILE = 30
const deck = [new Nmbr(0,0,0,0), new Nmbr(0,0,0,0)]

function getCoordinatesClick(event, canvas){
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return {x: Math.floor(x / SIZE_TILE), y: Math.floor(y / SIZE_TILE)}
}

function onClickCanvas(event, canvas) {
  console.log(getCoordinatesClick(event, canvas))
}

export default function init(canvas) {
  const context = canvas.getContext("2d");
  const numbr = new Nmbr(0,1,0,180)
  canvas.addEventListener('click', (event) => {onClickCanvas(event, canvas)}, false);
  setCanvasResolution(canvas, context)
  render(context)
  drawNmbr(context, numbr)
}