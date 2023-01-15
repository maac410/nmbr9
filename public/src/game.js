import {setCanvasResolution, render, drawNmbr} from './render.js'
import Nmbr from './nmbr.js'

function initBoard(canvas) {
  const context = canvas.getContext("2d");
  const numbr = new Nmbr(0,1,0,3)
  setCanvasResolution(canvas, context)
  render(context)
  drawNmbr(context, numbr)
}

export default initBoard