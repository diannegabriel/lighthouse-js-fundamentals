
const camelCase = function(input) {
  let sentence = input.split(" ");

  for (let i = 1; i < sentence.length; i++) {
    if (sentence[i].charAt(0) === sentence[i].charAt(0)) {
      sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].substring(1);
    }
  }
  return sentence.join('')
};


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
