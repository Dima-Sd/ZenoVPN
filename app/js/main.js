

document.addEventListener('DOMContentLoaded', () => {

const drawPath = (path, duration = 1500) => {
  const length = path.getTotalLength();

  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  path.style.willChange = 'stroke-dashoffset';

  let start = null;

  const animate = timestamp => {
    if (!start) start = timestamp;

    const progress = timestamp - start;
    const offset = Math.max(
      length - (length * progress) / duration,
      0
    );

    path.style.strokeDashoffset = offset;

    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

const progressBar = document.querySelectorAll('.metric-card__progress-bar');
    progressBar.forEach(path => drawPath(path, 1500));
});


