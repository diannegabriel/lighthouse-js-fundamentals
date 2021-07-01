const smartGarbage = function (trash, bins) {
  const garbage = Object.keys(bins);
  for (let i of garbage) {
    if (i === trash) {
      bins[i]++;
    }
  }
  return bins
};



/* ANOTHER SOLUTION

const bins = {
  waste: 4,
  recycling: 2,
  compost: 5
}

const smartGarbage = function (trash, bins) {
  if (trash === 'waste') {
    bins.waste++;
  } else if (trash === 'recycling') {
    bins.recycling++;
  } else if (trash === 'compost') {
    bins.compost++;
  }
  return bins
}
*/

smartGarbage('recycling', {waste: 4, recycling: 2, compost: 5});

console.log(smartGarbage('recycling', {waste: 4, recycling: 2, compost: 5}));