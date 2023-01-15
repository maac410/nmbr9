const SIZE_BOARD = 15
const SIZE_TILE = 30
const BOARD_COLOR = 'lightgray'
const CANVAS_SIZE = SIZE_BOARD * SIZE_TILE

function drawLineHorizontal(context, posY) {
  const posLineY = posY * SIZE_TILE;
  context.strokeStyle = BOARD_COLOR;
  context.beginPath();
  context.moveTo(0, posLineY);
  context.lineTo(CANVAS_SIZE, posLineY);
  context.stroke();
}

function drawLineVertical(context, posX) {
  const posLineX = posX * SIZE_TILE
  context.beginPath();
  context.moveTo(posLineX ,0);
  context.lineTo(posLineX, CANVAS_SIZE);
  context.stroke();
}

function drawGrid(context){
  for (let i = 0; i <= SIZE_BOARD; i++){
    drawLineHorizontal(context,i)
    drawLineVertical(context, i)
  }
}

function setCanvasResolution(canvas, context) {
  const dpr = window.devicePixelRatio;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  context.scale(dpr, dpr);
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;
}

function drawTile(context, posX, posY, nmbr) {
  context.rect(posX*SIZE_TILE,posY*SIZE_TILE,SIZE_TILE,SIZE_TILE);
  context.fillStyle = nmbr.color;
  context.fill();
}

function drawNmbr(context, nmbr) {
  nmbr.rotation.forEach((row, indexRow)=> {
    row.forEach((col,indexCol) => {
      if(col !== 0){
        drawTile(context, nmbr.posX + indexRow, nmbr.posY + indexCol, nmbr)
      }
    })
  });
}

function render(context){
  drawGrid(context)
}

export {setCanvasResolution, render, drawTile, drawNmbr}