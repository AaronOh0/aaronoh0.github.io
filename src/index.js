window.onload = oppstart;

const img = document.querySelector("#main-image");
const slideNumber = document.querySelector(".slidenumber");
const caption = document.querySelector(".slide-caption");

let currentSlide = 0;

const slides = {
  0: {
    src: "bilderEier/Transfer_4/Årvollskogen 91 markert.jpg",
    caption: "",
    slideNumber: "1/6",
  },
  1: {
    src: "bilderEier/Bilder/639950159990.jpg",
    caption: "",
    slideNumber: "2/6",
  },

  2: {
    src: "bilderEier/Transfer_3/639950159994.jpg",
    caption: "",
    slideNumber: "3/6",
  },

  3: {
    src: "bilderEier/Transfer_4/16802732.jpg",
    caption: "",
    slideNumber: "4/6",
  },
  4: {
    src: "bilderEier/Transfer_4/16802730.jpg",
    caption: "",
    slideNumber: "5/6",
  },
  5: {
    src: "bilderEier/Transfer_4/16802725.jpg",
    caption: "",
    slideNumber: "6/6",
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
  } else if (currentSlide == 5) {
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
