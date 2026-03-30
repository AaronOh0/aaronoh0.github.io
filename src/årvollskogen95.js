const slides = [
  { src: "bilderEier/Bilder Bull/Årvollskogen-95-0053.jpg", caption: "" },
  { src: "bilderEier/Bilder Bull/Årvollskogen-95-0057.jpg", caption: "" },
  { src: "bilderEier/Bilder Bretus/Arvollskogen 95 (15 of 16).jpg", caption: "" },
  { src: "bilderEier/Bilder Bretus/Arvollskogen 95 (1 of 16).jpg", caption: "" },
  { src: "bilderEier/Bilder Bretus/Arvollskogen 95 (4 of 16).jpg", caption: "" },
  { src: "bilderEier/Bilder Bretus/Arvollskogen 95 (7 of 16).jpg", caption: "" },
  { src: "bilderEier/Bilder Bull/Årvollskogen-95-1972.jpg", caption: "" },
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
