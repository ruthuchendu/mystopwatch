const buttons = document.querySelectorAll(".btn");
const zero = document.querySelector(".zero");
const header = document.querySelector(".header");

let count = 0;
buttons.forEach((btn) => {
  btn.addEventListener("click", trigger);
});

function trigger(e) {
  const styles = e.currentTarget.classList;

  if (styles.contains("increase")) {
    if (count < 100) {
      count++;
    }
  } else if (styles.contains("decrease")) {
    if (count > 1) {
      count--;
    }
  } else {
    count = 0;
  }
  if (count > 0) {
  zero.style.color = "#2C9C05";
  header.style.color = "#2C9C05";
  }
  if (count < 0) {
    zero.style.color = "#fff";
    header.style.color = "#fff";
  }
  if (count === 0) {
    zero.style.color = "#0E1FB2";
    header.style.color = "#0E1FB2";
  }
  zero.textContent = count;
  }