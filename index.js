const aboutBtn = document.getElementById('aboutBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup');

aboutBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
const collabBtn = document.getElementById('collabBtn');
const collabPopup = document.getElementById('collabPopup');
const closeCollab = document.getElementById('closeCollab');

collabBtn.addEventListener('click', () => {
  collabPopup.style.display = 'flex';
});

closeCollab.addEventListener('click', () => {
  collabPopup.style.display = 'none';
});


collabPopup.addEventListener('click', (e) => {
  if (e.target === collabPopup) {
    collabPopup.style.display = 'none';
  }
});
