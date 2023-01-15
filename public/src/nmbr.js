const NMBR_CARDS = {
    0: {
        color: 'lightgray',
        rotation: [
            [[1,1,1,1],[1,0,0,1],[1,1,1,1]],
            [[1,1,1],[1,0,1],[1,0,1],[1,1,1]],
            [[1,1,1,1],[1,0,0,1],[1,1,1,1]],
            [[1,1,1],[1,0,1],[1,0,1],[1,1,1]],
            [[1,1,1],[1,0,1],[1,0,1],[1,1,1]]
        ]
    },
    1: {
        color: 'brown',
        rotation: [[[0,0,1,1],[0,0,0,1,],[0,0,0,1],[0,0,0,1]]]
    },
    2: {
        color: 'orange'
    },
    3: {
        color: 'yellow'
    },
    4: {
        color: 'green'
    },
    5: {
        color: 'cyan'
    },
    6: {
        color: 'blue'
    },
    7: {
        color: 'purple'
    },
    8: {
        color: 'pink'
    },
    9: {
        color: 'red'
    },
}
class Nmbr {
  constructor(posX, posY, type, rotation) {
    this.posX = posX;
    this.posY = posY;
    this.type = type
    this.rotation = NMBR_CARDS[type].rotation[rotation]
    this.color = NMBR_CARDS[type].color
  }
}

export default Nmbr