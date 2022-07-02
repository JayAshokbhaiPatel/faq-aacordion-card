let accordion_title = document.getElementsByClassName("accordion_title");

for (let i = 0; i < accordion_title.length; i++) {
  console.log(accordion_title[i]);

  accordion_title[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
}
