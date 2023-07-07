document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home-link").addEventListener("click", () => {
    let homeContent = "<h2>Welcome to the Home Page</h2><p>This is the content of the home page.</p>";
    document.getElementById("home-content").innerHTML = homeContent;
  });

  document.getElementById("parking-lots-link").addEventListener("click", () => {
    fetch("http://localhost:3000/parkingLots")
      .then((resp) => resp.json())
      .then((lots) => {
        displayParkingLotsList(lots);
      })
      .catch((error) => {
        console.error("Error fetching parking lots:", error);
      });
  });

  document.getElementById("parking-details-link").addEventListener("click", () => {
    let content = "<h2>Parking Details</h2><p>Owners park at their own risk!</p>";
    document.getElementById("home-content").innerHTML = content;
  });

  document.getElementById("parking-time-link").addEventListener("click", () => {
    let content = "<h2>Parking Time</h2><p>Open daily from 9 a.m to 5 p.m.</p>";
    document.getElementById("home-content").innerHTML = content;
  })
  function displayParkingLotsList(lots) {
    let tableContent = "<h2>Parking Lots</h2>";
    tableContent += "<table>";
    tableContent += "<tr><th>Name</th><th>Available Space</th><th>Fee</th><th>Opening Hours</th><th></th></tr>";


    lots.forEach((lot) => {
      tableContent += "<tr>";
      tableContent += "<td>" + lot.name + "</td>";
      tableContent += "<td>" + lot.availableSpace + "</td>";
      tableContent += "<td>" + lot.fee + "</td>";
      tableContent += "<td>" + lot.openingHours + "</td>";
      tableContent += "<td><button class='book-now-button' data-lot='" + JSON.stringify(lot) + "'>Book Now</button></td>";
      tableContent += "</tr>";
    });

    tableContent += "</table>";
    document.getElementById("home-content").innerHTML = tableContent;


    const bookNowButtons = document.getElementsByClassName("book-now-button");
    Array.from(bookNowButtons).forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedLot = JSON.parse(button.dataset.lot);
        bookParkingLot(selectedLot);
      });
    });
  }

  function bookParkingLot(lot) {
    const confirmation = confirm(`Do you want to book ${lot.name} with ${lot.availableSpace} spaces remaining at a cost of ${lot.fee}? Opening hours: ${lot.openingHours}`);
    if (confirmation) {
      
      // Perform the booking process
      const newAvailableSpace = lot.availableSpace - 1; // Reduce the available space by 1
      alert(`Booking confirmed! ${lot.name} booked. Spaces remaining: ${newAvailableSpace}`);

      // Update the available space in the displayed content
      const availableSpaceCell = document.querySelector("td[data-lot='" + JSON.stringify(lot) + "'] + td");
      availableSpaceCell.textContent = newAvailableSpace;
    }
  }
});