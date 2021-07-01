const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

/*
const judgeVegetable = function (vegetables, metric) {
  let value = 0;
  let winner = "";
  for (let tomato of vegetables) {
    if (tomato[metric] > value){
      winner = tomato['submitter'];
      value = tomato[metric];
    }
  }
  return winner
}
*/

const judgeVegetable = function (vegetables, metric) {
  for (let veg of vegetables) {
    if (veg.metric > 0) {
    }
  }
  
}

console.log(judgeVegetable(vegetables, metric));