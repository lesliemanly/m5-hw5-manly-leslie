document.getElementById("box").addEventListener("mouseover", mouseOver);
document.getElementById("box").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("box").style.color = "#42f465";
}

function mouseOut() {
  document.getElementById("box").style.color = "#4250f4";
}

document.getElementById("box1").addEventListener("mouseover", mouseOver);
document.getElementById("box1").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("box1").style.color = "#e2f442";
}

document.getElementById("box2").addEventListener("mouseover", mouseOver);
document.getElementById("box2").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("box2").style.color = "#f45342";
}

function mouseOut() {
  document.getElementById("box2").style.color = "#42f4ee";
}

function changeText(box) {
  box.innerHTML = "Oooh-so close, but no cigar!";
}

function changeText(box1) {
  box1.innerHTML = "DING DING DING!-We have a winner!";
}

function changeText (box2) {
  box2.innerHTML ="Ooops-Better luck next time!";
}
