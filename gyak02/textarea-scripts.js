// Textarea hosszal Készíts olyan textarea mezőt, amely alatt fel van tüntetve, hogy eddig hány karaktert írtunk be.
// 1. megoldás:
// const textarea = document.querySelector("textarea");

// const div = document.createElement("div");
// div.innerHTML = "Karakterek száma: <span>8</span>";
// textarea.parentNode.insertBefore(div, textarea.nextSibling);
// const span = div.querySelector("span");

// const updateCounter = () => {
//   span.innerHTML = textarea.value.length;
// };

// updateCounter();
// textarea.addEventListener("input", updateCounter);

class TextareaWithCounter {
  constructor(textarea) {
    // this.updateCounter = this.updateCounter.bind(this);
    this.textarea = textarea;
    const div = document.createElement("div");
    div.innerHTML = "Karakterek száma: <span>8</span>";
    textarea.parentNode.insertBefore(div, textarea.nextSibling);
    this.span = div.querySelector("span");

    this.updateCounter();
    textarea.addEventListener("input", this.updateCounter);
  }

  // updateCounter() {
  updateCounter = () => {
    // console.log(this);
    this.span.innerHTML = this.textarea.value.length;
  };
}

const textareas = document.querySelectorAll("textarea");
textareas.forEach((textarea) => new TextareaWithCounter(textarea));
