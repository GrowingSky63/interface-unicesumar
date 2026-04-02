function selectMood(btn) {
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

const moodMap = {
  'ótimo': { emoji: '😌', msg: 'Que bom saber disso! Aproveite esse estado de leveza hoje.' },
  'bem': { emoji: '🙂', msg: 'Ótimo! Às vezes "bem" já é muito. Continue com esse ritmo.' },
  'neutro': { emoji: '😐', msg: 'Tudo certo. Dias neutros também são válidos. Respire fundo.' },
  'cansado': { emoji: '😔', msg: 'Obrigado por compartilhar. Que tal um exercício de respiração?' },
  'difícil': { emoji: '😢', msg: 'Estamos aqui com você. Um passo de cada vez. Você consegue.' }
};

function goToDashboard() {
  const selected = document.querySelector('.mood-btn.selected');
  const mood = selected ? selected.dataset.mood : 'ótimo';
  const info = moodMap[mood];
  document.getElementById('dash-mood-emoji').textContent = info.emoji;
  document.getElementById('dash-mood-text').textContent = mood;
  document.getElementById('dash-mood-msg').textContent = info.msg;

  document.getElementById('screen-onboarding').classList.remove('active');
  document.getElementById('screen-onboarding').classList.add('leaving');
  setTimeout(() => {
    document.getElementById('screen-dashboard').classList.add('active');
    document.getElementById('backBtn').style.display = 'block';
  }, 500);
}

function goBack() {
  document.getElementById('screen-dashboard').classList.remove('active');
  document.getElementById('screen-onboarding').classList.remove('leaving');
  document.getElementById('screen-onboarding').classList.add('active');
  document.getElementById('backBtn').style.display = 'none';
}