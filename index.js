fetch("http://localhost:3000/parkingLots")
  .then((resp) => resp.json())
  .then((lots) => {
      console.log(lots);
      displayParkingLots(lots);
  });
function displayParkingLots(lots) {
  const ul = document.getElementById('park-name-list');

  lots.forEach((lot, index) => {
      const liElement = document.createElement('li');

      const aElement = document.createElement('a');
      aElement.textContent = lot.name;
      aElement.href = '#';

      aElement.addEventListener('click', () => {
          document.getElementById('parkname').textContent = lot.name;
          document.getElementById('spaces-remaining').textContent = lot.remainingSpaces;
          document.getElementById('parking-fee').textContent = lot.fee;
          document.getElementById('Opening-hours').textContent = lot.openingHours;
      });

      liElement.appendChild(aElement);
      ul.appendChild(liElement);
  });
}
