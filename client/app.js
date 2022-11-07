const tableBody = document.getElementById('table-body')

const getFlight = () => {
  fetch('http://localhost:8000/flights')
      .then(response => response.json())
      .then(flights => {
          console.log(flights)
          populateTable(flights)
      })
      .catch(err => console.log(err))
}
getFlight()

const populateTable = (flights) => {
  for (const flight of flights) {
    const tableRow = document.createElement('tr')
    const tableIcon = document.createElement('td')
    tableIcon.textContent = "✈️"
    tableRow.append(tableIcon)
    tableBody.append(tableRow)

    const flightDetails = {
      time: flight.arrival.scheduled.slice(11,16),
      destination: flight.arrival.icao,
      flight: flight.flight.iata,
      gate: flight.arrival.icao,
      remarks: (flight.arrival.scheduled == flight.arrival.estimated ? "ONTIME" : 'DELAYED')
    }
    console.log(flightDetails)
    for (const flightDetail in flightDetails) {
      const tableCell = document.createElement('td')
      const word = Array.from(flightDetails[flightDetail]) 

      for(const[index, letter] of word.entries()) {
        const letterElement = document.createElement('div')

        tableCell.append(letterElement)
      }
      tableRow.append(tableCell)
    }
    
  }

}