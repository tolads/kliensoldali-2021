// 1. Landing page – belső linkek A landing page oldalon a navigációs fejlécben lévő belső linkekre kattintva az oldal gördülve menjen az adott helyre.
const links = document.querySelectorAll("#mainNav a");
// .querySelector()

const handleClick = (event) => {
  event.preventDefault();
  const id = event.target.getAttribute("href");

  history.pushState(null, null, id);
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
  });
};
links.forEach((link) => {
  link.addEventListener("click", handleClick);
});

// function F() {}
// const F = () => {}

// 2. Landing page – navigáció rögzítése Ha elgördült az oldal 200px-nyit, akkor alkalmazzuk a navbar-scrolled stílusosztályt a nav elemen. Ügyelj arra, hogy a scroll esemény nagyon sokszor hívódik meg!

const handleScroll = () => {
  // console.log("scrolling!");
  document
    .querySelector("nav")
    .classList.toggle("navbar-scrolled", window.scrollY > 200);
};

// 1. megoldás:
// document.addEventListener("scroll", handleScroll);

// 2. megoldás: custom throttle
// let waiting = false;
// window.addEventListener("scroll", function (e) {
//   if (!waiting) {
//     handleScroll();
//     window.requestAnimationFrame(function () {
//       waiting = false;
//     });
//     waiting = true;
//   }
// });

// 3. megoldás: lodash throttle metódus
window.addEventListener("scroll", _.throttle(handleScroll, 100));

// 3. Landing page – animáció megjelenéskor Ha egy elem gördítés közben a viewportba ér, akkor valamilyen animáció segítségével jelenjen meg! Az elemeket deklaratívan jelöljük meg HTML5 data attribútumokat használva, pl. data-scroll. Az animáció nevét is eltárolhatod data attribútumban, pl. data-scroll-animation="fadeInUp". Animációhoz használhatod az animate.css könyvtárat. Ügyelj arra, hogy a scroll esemény nagyon sokszor hívódik meg!
// document.querySelectorAll("[data-scroll]").forEach((element) => {
//   const animationType = element.dataset.scrollAnimation;
//   element.classList.add("animate__animated", "animate__" + animationType);
// });

const observer = new IntersectionObserver(onObserve, {
  threshold: 0.0,
});
function onObserve(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry);
      const element = entry.target;
      const animationType = element.dataset.scrollAnimation;
      element.classList.add("animate__animated", "animate__" + animationType);
    }
  });
}

document.querySelectorAll("[data-scroll]").forEach((element) => {
  observer.observe(element);
});

// 4. Landing page – folyamatsáv Helyezz el egy olvasási folyamatsávot az oldal tetején. A gördítés mértéke szerint változzon 0 és 100% között a szélessége!
{
  const progressBar = document.querySelector("#progressbar");

  const handleScroll = () => {
    const maxScroll = document.body.scrollHeight - document.body.clientHeight;
    const ratio = scrollY / maxScroll;
    progressBar.style.width = ratio * 100 + "%";
  };

  window.addEventListener("scroll", _.throttle(handleScroll, 30));
}
