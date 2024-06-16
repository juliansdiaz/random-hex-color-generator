//Select DOM elements
const changeBtn = document.querySelector("button");
const hexColor = document.getElementById("color-text");

function ChangeRandomColor() {
  let digits = '0123456789ABCDEF';
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    color += digits[randomIndex];    
  }

  return color;
}

changeBtn.addEventListener('click', function() {
  let randomColor = ChangeRandomColor();

  //Update text
  hexColor.textContent = randomColor;

  //Update background color
  document.body.style.backgroundColor = randomColor;
})