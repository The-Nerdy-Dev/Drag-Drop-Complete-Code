window.addEventListener('DOMContentLoaded', init);

// Set the references
const imageBox = document.querySelector('.imageBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');
console.log(whiteBoxes);

function init() {
  console.log('inside the init....');
  bindEvents();
}

const onDragStart = event => {
  console.log('drag start event got fired...');
  event.target.className += ' hold';
  setTimeout(() => {
    event.target.className = 'hide';
  }, 0);
};

const onDragEnd = event => {
  console.log('drag end event got fired...');
  event.target.className = 'imageBox';
};

const onDragOver  = event => {
    event.preventDefault();
    console.log('drag over event got fired...');
}

const onDragEnter = event => {
    console.log('drag enter event fot fired');
    event.target.className += ' dashed'
}
const onDragLeave = event => {
    console.log('drag leave event got fired...');
    event.target.className = 'whiteBox';
}
const onDrop = event =>{
    console.log('drop event got fired...');
    event.target.append(imageBox);
}

function bindEvents() {
  imageBox.addEventListener('dragstart', onDragStart);
  imageBox.addEventListener('dragend', onDragEnd);

  for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', onDragOver);
    whiteBox.addEventListener('dragenter', onDragEnter);
    whiteBox.addEventListener('dragleave', onDragLeave);
    whiteBox.addEventListener('drop', onDrop);
  }
}
