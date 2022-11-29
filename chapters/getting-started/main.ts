function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(30)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

const WIDTH = 80
const HEIGHT = 80

function drawEllipse(size: number) {
  ellipse(mouseX, mouseY, size, size)
}

let mouseDown = false
let mouseDownFrameCount: number

const ease = (n: number) => Math.pow(n, 0.5) - 5

function draw() {
  background(0)

  if (!mouseDown && mouseIsPressed) {
    mouseDown = true
    mouseDownFrameCount = frameCount
    console.log(
      'setting mouse down to',
      true,
      'mouseDownFrameCount',
      mouseDownFrameCount
    )
  } else if (mouseDown && !mouseIsPressed) {
    mouseDown = false
    mouseDownFrameCount = 0
    console.log('setting mouse down to', false, 'mouseDownFrameCount', 0)
  }

  if (mouseDown) {
    console.log(frameCount - mouseDownFrameCount, 'frames ellapsed')
  }

  const scaleValue = map(ease(frameCount - mouseDownFrameCount), 0, 1, 80, 160)
  drawEllipse(scaleValue)

  // drawEllipse();

  // console.log(time)

  // background(255);
  // translate(mouseX, mouseY);
  // console.log([mouseX, mouseY]);
  // fill(234, 31, 81);
  // noStroke();
  // rect(-125, -125, 250, 250);
  // fill(255);
  // textStyle(BOLD);
  // textSize(140);
  // text('LOL', -115, 75);
}
