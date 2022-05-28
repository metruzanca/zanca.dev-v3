let lastKnownScrollPosition = 0;
let ticking = false;

export default function scroll(callback: (position: number) => void) {
  return () => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        callback(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  }
}
