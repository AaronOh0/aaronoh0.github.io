const slides = [
  { src: "bilderEier/Osloveien Bilder/009_002_Osloveien-366-0004.jpg.jpg.jpg", caption: "" },
  { src: "bilderEier/Osloveien Bilder/001_010_Osloveien-366-0996.jpg.jpg.jpg", caption: "" },
  { src: "bilderEier/Osloveien Bilder/002_016_Osloveien-366-1002.jpg.jpg.jpg", caption: "" },
  { src: "bilderEier/Osloveien Bilder/003_015_Osloveien-366-1001.jpg.jpg.jpg", caption: "" },
  { src: "bilderEier/Osloveien Bilder/004_014_Osloveien-366-1000.jpg.jpg.jpg", caption: "" },
  { src: "bilderEier/Osloveien Bilder/005_013_Osloveien-366-0999.jpg.jpg.jpg", caption: "" },
  { src: "bilderEier/Osloveien Bilder/006_012_Osloveien-366-0998.jpg.jpg.jpg", caption: "" },
  { src: "bilderEier/Osloveien Bilder/007_011_Osloveien-366-0997.jpg.jpg.jpg", caption: "" },
  { src: "bilderEier/Osloveien Bilder/022_001_Osloveien-366-0002.jpg.jpg.jpg", caption: "" },
];

let currentSlide = 0;

window.onload = function () {
  const img = document.querySelector("#main-image");
  const slideNumber = document.querySelector(".slidenumber");
  const caption = document.querySelector(".slide-caption");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const thumbStrip = document.querySelector(".thumb-strip");

  slides.forEach(function (slide, i) {
    const thumb = document.createElement("img");
    thumb.src = slide.src;
    thumb.className = "thumb";
    thumb.alt = "";
    thumb.onclick = function () { goTo(i); };
    thumbStrip.appendChild(thumb);
  });

  prevBtn.onclick = function () { goTo(currentSlide - 1); };
  nextBtn.onclick = function () { goTo(currentSlide + 1); };

  goTo(0);

  function goTo(n) {
    currentSlide = Math.max(0, Math.min(n, slides.length - 1));

    img.style.opacity = "0";
    setTimeout(function () {
      img.src = slides[currentSlide].src;
      img.style.opacity = "1";
    }, 180);

    caption.textContent = slides[currentSlide].caption || "";
    slideNumber.textContent = (currentSlide + 1) + " / " + slides.length;

    prevBtn.style.display = currentSlide === 0 ? "none" : "flex";
    nextBtn.style.display = currentSlide === slides.length - 1 ? "none" : "flex";

    document.querySelectorAll(".thumb").forEach(function (t, i) {
      t.classList.toggle("active", i === currentSlide);
    });
  }
};
