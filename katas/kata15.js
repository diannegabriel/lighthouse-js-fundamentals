const organizeInstructors = function(instructors) {
  let orgCourse = {};

  for (let i = 0; i < instructors.length; i++) {
    let course = instructors[i].course;
    if (course in orgCourse) {
      orgCourse[course].push(instructors[i].name);
    } else {
      orgCourse[course] = [instructors[i].name]
    }
  }
return orgCourse
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