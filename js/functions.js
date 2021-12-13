function pushKey() {
  window.addEventListener("keydown", function (event) {
    let key = event.keyCode;
    const audio = document.querySelector(`audio[data-key="${key}"]`);

    const btnContainer = document.getElementById(key);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    btnContainer.classList.add("sound-active");

    audio.addEventListener("ended", function () {
      btnContainer.classList.remove("sound-active");
    });
  });
}

function mouseClick() {
  window.addEventListener("click", function (event) {
    let target = event.target;

    let key = target.getAttribute("id");
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    target.classList.add("sound-active");

    audio.addEventListener("ended", function () {
      target.classList.remove("sound-active");
    });
  });
}

export function all() {
  pushKey();
  mouseClick();
}
