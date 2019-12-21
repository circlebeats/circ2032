export default function sketch (p5) {
  let canvas = null

  p5.setup = function() {
    canvas = p5.createCanvas(20,20)
  }

  p5.draw = function() {
    // You can get the data into the data props
    const color = p5.data.color
    p5.background(color)
  }
}
