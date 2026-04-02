let breathing = false;
let breathInterval;
function toggleBreath() {
  breathing = !breathing;
  const circle = document.getElementById('breathCircle');
  const text = document.getElementById('breathText');
  const btn = document.querySelector('.card-breath .card-action');

  if (breathing) {
    btn.textContent = 'pausar exercício';
    let phase = 0;
    const phases = [
      { label: 'inspire…', dur: 4000, scale: 1.35 },
      { label: 'segure…', dur: 2000, scale: 1.35 },
      { label: 'expire…', dur: 6000, scale: 1.0 }
    ];

    function runPhase() {
      if (!breathing) return;
      const p = phases[phase % 3];
      text.textContent = p.label;
      circle.style.transform = `scale(${p.scale})`;
      circle.style.transition = `transform ${p.dur}ms ease-in-out`;
      phase++;
      breathInterval = setTimeout(runPhase, p.dur);
    }
    runPhase();
  } else {
    clearTimeout(breathInterval);
    btn.textContent = 'iniciar exercício';
    text.textContent = 'toque para começar';
    circle.style.transform = 'scale(1)';
  }
}