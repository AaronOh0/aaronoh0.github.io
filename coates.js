window.onload = oppstart;

const img = document.querySelector("#main-image");
const slideNumber = document.querySelector(".slidenumber");
const caption = document.querySelector(".slide-caption");

let currentSlide = 0;

const slides = {
  0: {
    src: "Sundstredet 5 (6 of 6).jpg",
    caption: "Inngang til Årvollskogen 95",
    slideNumber: "1/6",
  },
  1: {
    src: "IMG_3845.jpg",
    caption: "Inngang til Årevollskogen 91",
    slideNumber: "2/6",
  },
  2: {
    src: "Sundstredet 5 (1 of 6).jpg",
    caption: "Caption",
    slideNumber: "3/6",
  },
  3: {
    src: "Sundstredet 5 (4 of 6).jpg",
    caption: "Caption",
    slideNumber: "4/6",
  },
  4: {
    src: "IMG_3848.jpg",
    caption: "Caption",
    slideNumber: "5/6",
  },
  5: {
    src: "IMG_3855.jpg",
    caption: "Caption",
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
    document.querySelector(".next").style.display = "block";
  } else if (currentSlide == 1) {
    document.querySelector(".prev").style.display = "block";
    document.querySelector(".next").style.display = "block";
  } else if (currentSlide == 5) {
    document.querySelector(".prev").style.display = "block";
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
