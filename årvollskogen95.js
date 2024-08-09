window.onload = oppstart;

const img = document.querySelector("#main-image");
const slideNumber = document.querySelector(".slidenumber");
const caption = document.querySelector(".slide-caption");

let currentSlide = 0;

const slides = {
  0: {
    src: "bilderEier/Transfer_2/Arvollskogen 95 (1 of 16).jpg",
    caption: "Inngang til Årvollskogen 95",
    slideNumber: "1/5",
  },
  1: {
    src: "bilderEier/Transfer_2/Arvollskogen 95 (3 of 16).jpg",
    caption: "Inngang til Årevollskogen 91",
    slideNumber: "2/5",
  },
  2: {
    src: "bilderEier/Transfer_2/Arvollskogen 95 (4 of 16).jpg",
    caption: "Caption",
    slideNumber: "3/5",
  },
  3: {
    src: "bilderEier/Transfer_2/Arvollskogen 95 (7 of 16).jpg",
    caption: "Skriv inn noe",
    slideNumber: "4/5",
  },
  4: {
    src: "bilderEier/Transfer_2/Arvollskogen 95 (16 of 16).jpg",
    caption: "Noe",
    slideNumber: "5/5",
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
  } else if (currentSlide == 4) {
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
