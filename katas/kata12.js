const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let ingA = 0;
  let ingB = 0;

  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      for (let a = 0; a < bakeryA.length; a++) {
        if (bakeryA[a] === recipes[i].ingredients[j]) {
          ingA = recipes[i].ingredients[j];
        }
      }

      for (let b = 0; b < bakeryB.length; b++) {
        if (bakeryB[b] === recipes[i].ingredients[j]) {
          ingB = recipes[i].ingredients[j]
        }
      }

      if (
        (ingA === recipes[i].ingredients[0] || 
        ingA === recipes[i].ingredients[1]) && 
        (ingB === recipes[i].ingredients[0] || 
        ingB === recipes[i].ingredients[1])) {
        console.log(ingA+" "+ingB); // To check if ingredients are right
        return recipes[i].name
      }
    }
  }
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
