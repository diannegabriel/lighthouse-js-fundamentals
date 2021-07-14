const organizeInstructors = function(instructors) {
  var finalObject = {};
  
  for (var i = 0; i < instructors.length; i++){
    var course = instructors[i].course;
    if (course in finalObject){
      finalObject[course].push(instructors[i].name);
    }
    else {
      finalObject[course] = [instructors[i].name];
    }   
  }
  return finalObject;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));