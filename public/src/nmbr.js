const NMBR_CARDS = [
    {
        color: 'lightgray',
        rotation: [
            [[1,1,1,1],[1,0,0,1],[1,1,1,1]],
            [[1,1,1],[1,0,1],[1,0,1],[1,1,1]],
            [[1,1,1,1],[1,0,0,1],[1,1,1,1]],
            [[1,1,1],[1,0,1],[1,0,1],[1,1,1]],
            [[1,1,1],[1,0,1],[1,0,1],[1,1,1]]
        ]
    },
    ,{
        color: 'brown',
        rotation: [[[0,0,1,1],[0,0,0,1,],[0,0,0,1],[0,0,0,1]]]
    },
    ,{
        number: 2,
        color: 'orange'
    },
    {
        number: 3,
        color: 'yellow'
    },
    {
        number: 4,
        color: 'green'
    },
    {
        number: 5,
        color: 'cyan'
    },
    {
        number: 6,
        color: 'blue'
    },
    {
        number: 7,
        color: 'purple'
    },
    {
        number: 8,
        color: 'pink'
    },
    {
        number: 9,
        color: 'red'
    },
]
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
export {NMBR_CARDS}