fetch("http://localhost:3000/parkingLots")
  .then((resp) => resp.json())
  .then((lots) => {
    console.log(lots);

    displayParkingLots(lots)
  });


function displayParkingLots(lots) {
  lots.forEach((lot, index) => {
    const ul = document.getElementById('park-name')

    const liElement = document.createElement('li')

    liElement.innerHTML = `<a href="#">${lot.name}</a>`

    liElement.addEventListener('click', () => {
      document.getElementById('parkname').textContent = park.name
      document.getElementById('spaces-remaining').textContent = spaces.remaining
      document.getElementById('parking-fee').textContent = parking.fee
      document.getElementById('Opening-hours').textContent = Opening.hours
      })

    ul.appendChild(liElement)
  })
// book now button 
// document.getElementById('btnBookNow').addEventListener('click', () => {
}