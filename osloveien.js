window.onload = oppstart;

const img = document.querySelector("#main-image");
const slideNumber = document.querySelector(".slidenumber");
const caption = document.querySelector(".slide-caption");

let currentSlide = 0;

const slides = {
  0: {
    src: "bilderEier/Osloveien Bilder/009_002_Osloveien-366-0004.jpg.jpg.jpg",
    caption: "",
    slideNumber: "1/9",
  },
  1: {
    src: "bilderEier/Osloveien Bilder/012_005_Osloveien-366-0009.jpg.jpg.jpg",
    caption: "",
    slideNumber: "2/9",
  },

  2: {
    src: "bilderEier/Osloveien Bilder/003_015_Osloveien-366-1001.jpg.jpg.jpg",
    caption: "",
    slideNumber: "3/9",
  },
  3: {
    src: "bilderEier/Osloveien Bilder/osloveien inne fra tlf.jpg",
    caption: "",
    slideNumber: "4/9",
  },
  4: {
    src: " bilderEier/Osloveien Bilder/020_021_Osloveien 366 kartfoto.jpg.jpg.jpg",
    caption: "",
    slideNumber: "5/9",
  },
  5: {
    src: "bilderEier/Osloveien Bilder/023_Tegninger markert Osloveien 366_1.jpg.jpg",
    caption: "",
    slideNumber: "6/9",
  },
  6: {
    src: "bilderEier/image.png",
    caption: "",
    slideNumber: "7/9",
  },
  7: {
    src: "bilderEier/image2.png",
    caption: "",
    slideNumber: "8/9",
  },
  8: {
    src: "bilderEier/image3.png",
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
