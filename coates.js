window.onload = oppstart;

const img = document.querySelector("#main-image");
const slideNumber = document.querySelector(".slidenumber");
const caption = document.querySelector(".slide-caption");

let currentSlide = 0;

const slides = {
  0: {
    src: "bilderEier/Transfer/Sundstredet 5 (1 of 6).jpg",
    caption: "Inngang til Årvollskogen 95",
    slideNumber: "1/3",
  },
  1: {
    src: "bilderEier/Transfer/Sundstredet 5 (4 of 6).jpg",
    caption: "Inngang til Årevollskogen 91",
    slideNumber: "2/3",
  },
  2: {
    src: "bilderEier/Transfer/Sundstredet 5 (6 of 6).jpg",
    caption: "Caption",
    slideNumber: "3/3",
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
    document.querySelector(".next").style.display = "block";
  } else if (currentSlide == 1) {
    document.querySelector(".prev").style.display = "block";
    document.querySelector(".next").style.display = "block";
  } else if (currentSlide == 2) {
    document.querySelector(".prev").style.display = "block";
    document.querySelector(".next").style.display = "none";
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
