const slides = [
  /* Add nye prosjekter image paths here when available */
  /* { src: "bilderEier/...", caption: "" }, */
];

let currentSlide = 0;

window.onload = function () {
  const img = document.querySelector("#main-image");
  const slideNumber = document.querySelector(".slidenumber");
  const caption = document.querySelector(".slide-caption");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const thumbStrip = document.querySelector(".thumb-strip");

  if (slides.length === 0) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    slideNumber.textContent = "";
    return;
  }

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
