// Altera a visibilidade 

function classToggle() {
  let content = document.getElementById("toggle");
  let display = document.getElementById("toggleDisplay")

  if (content.classList.contains("hidden") && display.classList.contains("hidden")) {
    content.className = "visible";
    display.className = "toggleDisplay";

  } else if (content.classList.contains("visible") && display.classList.contains("toggleDisplay")) {
    content.className = "hidden";
    display.className = "hidden";
  }
}
