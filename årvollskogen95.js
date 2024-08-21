window.onload = oppstart;

const img = document.querySelector("#main-image");
const slideNumber = document.querySelector(".slidenumber");
const caption = document.querySelector(".slide-caption");

let currentSlide = 0;

const slides = {
  0: {
    src: "Årvollskogen-95-0053.jpg",
    caption: "",
    slideNumber: "1/9",
  },
  1: {
    src: "Årvollskogen-95-0057.jpg",
    caption: "",
    slideNumber: "2/9",
  },
  2: {
    src: "Arvollskogen 95 (15 of 16).jpg",
    caption: "",
    slideNumber: "3/9",
  },
  3: {
    src: "Arvollskogen 95 (1 of 16).jpg",
    caption: "",
    slideNumber: "4/9",
  },
  4: {
    src: "Arvollskogen 95 (4 of 16).jpg",
    caption: "",
    slideNumber: "5/9",
  },
  5: {
    src: "Arvollskogen 95 (7 of 16).jpg",
    caption: "",
    slideNumber: "6/9",
  },
  6: {
    src: "Årvollskogen-95-1972.jpg",
    caption: "",
    slideNumber: "7/9",
  },
  7: {
    src: "IMG_3856.jpg",
    caption: "",
    slideNumber: "8/9",
  },
  8: {
    src: "IMG_3860.jpg",
    caption: "",
    slideNumber: "9/9",
  },
};

function oppstart() {
  document.querySelector(".prev").onclick = previous;
  document.querySelector(".next").onclick = next;
  updateSlide();
}

function updateSlide() {
  img.src = slides[currentSlide].src;
  caption.innerHTML = slides[currentSlide].caption;
  slideNumber.innerHTML = slides[currentSlide].slideNumber;

  if (currentSlide == 0) {
    document.querySelector(".prev").style.display = "none";
  } else if (currentSlide == 1) {
    document.querySelector(".prev").style.display = "block";
  } else if (currentSlide == 8) {
    document.querySelector(".next").style.display = "none";
  } else {
    document.querySelector(".next").style.display = "block";
  }
}

function next() {
  if (currentSlide >= 0) {
    currentSlide++;
  }
  updateSlide();
}

function previous() {
  if (currentSlide > 0) {
    currentSlide--;
  }
  updateSlide();
}
