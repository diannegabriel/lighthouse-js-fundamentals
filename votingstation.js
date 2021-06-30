const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations (stations) {
  let goodStations = [];

  for (const station of stations) {
    const limit = station[1];
    
    if (limit >= 20){
      const location = station[2];

      if (location === 'school' || location === 'community centre') {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations
}

console.log(chooseStations(stations));