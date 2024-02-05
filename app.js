// Starting the change of the menu icon onclick

const bars = document.querySelectorAll(".icon i");
const qlinks = document.querySelectorAll(".quicklinks");
const navbg = document.querySelector(".nav-bg");
const footbg = document.querySelector(".foot-bg");

let bg;
bars.forEach((bar, i) => {
  bar.addEventListener("click", (e) => {
    i === 0 ? (bg = navbg) : (bg = footbg);
    if (bg.classList.contains("active")) {
      bg.classList.replace("active", "desactive");
    } else {
      bg.classList.replace("desactive", "active") || bg.classList.add("active");
    }
    qlinks[i].classList.toggle("appear");

    e.target.style.transform = "rotate(-45deg)";
    e.target.style.transition = "transform 0.3s";
    setTimeout(() => {
      e.target.style.transform = "rotate(-180deg)";
      e.target.classList.toggle("fa-x");
    }, 100);
  });
});

// making the navbar active onscroll
const head = document.querySelector(".header");
const navbar = document.querySelector(".fixed");

let sections = document.querySelectorAll(".sec");
let links = document.querySelectorAll(".quicklinks a");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let scroly = window.scrollY;
    let top = sec.offsetTop - navbar.offsetHeight;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (scroly >= top && scroly < top + height) {
      sec.classList.add("animate");
      links.forEach((link) => {
        link.classList.remove("active");
      });
      if (id !== null) {
        document
          .querySelectorAll(".quicklinks a[href*=" + id + "]")
          .forEach((e) => {
            e.classList.add("active");
          });
      }
    }
  });
});

// making the image box responsive

let arrows = document.querySelectorAll(".arrow");
arrows.forEach((move) => {
  move.addEventListener("click", (next) => {
    let boxes = document.querySelectorAll(".section-2 .box");
    let activeboxnum = document.querySelector(".section-2 .box.active");
    let boxpos = +activeboxnum.getAttribute("data-pos");
    if (next.target.id === "arrleft") {
      decrease(boxes, boxpos);
    } else {
      increase(boxes, boxpos);
    }
    activeboxnum.classList.remove("active");
  });
});

function decrease(boxes, pos) {
  if (pos - 1 < 0) {
    boxes[boxes.length - 1].classList.add("active");
  } else {
    boxes[pos - 1].classList.add("active");
  }
}
function increase(boxes, pos) {
  if (pos + 1 === boxes.length) {
    boxes[0].classList.add("active");
  } else {
    boxes[pos + 1].classList.add("active");
  }
}

// changing the person's Testimonials

let dots = document.querySelectorAll(".slides div");
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    let dotpos = +e.target.getAttribute("data-pos");
    document.querySelector(".slides div.active").classList.remove("active");
    e.target.classList.add("active");
    let current = document.querySelector("img.current");
    let next = document.querySelector("img.next");
    let previous = document.querySelector("img.previous");

    current.classList.remove("current");
    next.classList.remove("next");
    previous.classList.remove("previous");

    document.querySelector("#img" + (dotpos + 1)).classList.add("current");
    dotpos + 1 === 3
      ? document.querySelector("#img1").classList.add("next")
      : document.querySelector("#img" + (dotpos + 2)).classList.add("next");
    dotpos - 1 === -1
      ? document.querySelector("#img3").classList.add("previous")
      : document.querySelector("#img" + dotpos).classList.add("previous");
  });
});
