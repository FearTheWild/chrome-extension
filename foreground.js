console.log('From foreground');

// Popup
const popup = document.createElement('div');

popup.id = 'ftw-popup';
popup.innerHTML = '<h2>Posture check!</h2><p>Roll your shoulders back and push your head upright. Stretch your neck for 15 seconds left, right, and back.</p><a class="ftw-button">Finished</a>';

document.body.appendChild(popup)
