const phrases = [
  "> defining 'done' since the dawn of standups",
  "> the picture, not the puzzle",
  "> if you can't see it, you can't ship it",
  "> point at the mountain, not at the map",
  "> you'll know. you'll just KNOW."
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const typed = document.querySelector(".typed");
const video = document.querySelector(".bg-video");

if (video) {
  const reveal = () => {
    video.classList.add("is-ready");
    video.closest(".bg")?.classList.add("is-video-ready");
  };

  if (reduceMotion) {
    reveal();
    video.pause();
  } else if (video.readyState >= 3) {
    reveal();
  } else {
    video.addEventListener("canplay", reveal, { once: true });
    video.addEventListener("loadeddata", reveal, { once: true });
  }
}

if (typed) {
  if (reduceMotion) {
    typed.textContent = phrases[0];
  } else {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const phrase = phrases[phraseIndex];
      typed.textContent = phrase.slice(0, charIndex);

      if (!deleting && charIndex === phrase.length) {
        deleting = true;
        window.setTimeout(tick, 1450);
        return;
      }

      if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        window.setTimeout(tick, 250);
        return;
      }

      charIndex += deleting ? -1 : 1;
      window.setTimeout(tick, deleting ? 32 : 46);
    };

    window.setTimeout(tick, 1200);
  }
}
