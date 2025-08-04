// script.js
const calendar = document.getElementById('calendar');

tasks.forEach((item, index) => {
  const stored = localStorage.getItem(`task_${index}`);
  const div = document.createElement('div');
  div.className = 'day' + (stored === 'done' ? ' completed' : '');

  div.innerHTML = `
    <h2>${item.day}</h2>
    <p>${item.task}</p>
    <button onclick="completeTask(${index}, this.parentElement)">✅ Hecho</button>
    <button class="remove-btn" onclick="undoTask(${index}, this.parentElement)">✖ Deshacer</button>
  `;

  calendar.appendChild(div);
});

function completeTask(index, element) {
  const checkSound = document.getElementById('checkSound');
  localStorage.setItem(`task_${index}`, 'done');
  element.classList.add('completed');
  if (checkSound) {
    checkSound.currentTime = 0;
    checkSound.play();
  }
}

function undoTask(index, element) {
  const uncheckSound = document.getElementById('uncheckSound');
  localStorage.removeItem(`task_${index}`);
  element.classList.remove('completed');
  if (uncheckSound) {
    uncheckSound.currentTime = 0;
    uncheckSound.play();
  }
}
