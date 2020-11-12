const canvasEle = document.getElementById('drawContainer');
const context = canvasEle.getContext('2d');

context.beginPath();
context.lineWidth = '5';  width of the line
context.strokeStyle = 'red';  color of the line
context.moveTo(50,50);  begins a new sub-path based on the given x and y values.
context.lineTo(50, 100);  used to create a pointer based on x and y  
context.stroke();  this is where the actual drawing happens.


let startPosition = {x 0, y 0};
let lineCoordinates = {x 0, y 0};
let isDrawStart = false;

const getClientOffset = (event) = {
    const {pageX, pageY} = event.touches  event.touches[0]  event;
    const x = pageX - canvasEle.offsetLeft;
    const y = pageY - canvasEle.offsetTop;

    return {
       x,
       y
    } 
}

const drawLine = () = {
   context.beginPath();
   context.moveTo(startPosition.x, startPosition.y);
   context.lineTo(lineCoordinates.x, lineCoordinates.y);
   context.stroke();
}

const mouseDownListener = (event) = {
   startPosition = getClientOffset(event);
   isDrawStart = true;
}

const mouseMoveListener = (event) = {
  if(!isDrawStart) return;
  
  lineCoordinates = getClientOffset(event);
  clearCanvas();
  drawLine();
}

const mouseupListener = (event) = {
  isDrawStart = false;
}

const clearCanvas = () = {
   context.clearRect(0, 0, canvasEle.width, canvasEle.height);
}

canvasEle.addEventListener('mousedown', mouseDownListener);
canvasEle.addEventListener('mousemove', mouseMoveListener);
canvasEle.addEventListener('mouseup', mouseupListener);

canvasEle.addEventListener('touchstart', mouseDownListener);
canvasEle.addEventListener('touchmove', mouseMoveListener);
canvasEle.addEventListener('touchend', mouseupListener);
