// Altera a visibilidade 

function classToggle() {
  let content = document.getElementById("toggle");

  if (content.classList.contains("hidden")) {
    content.className = "visible";
  } else if (content.classList.contains("visible")) {
    content.className = "hidden";
  }
}
