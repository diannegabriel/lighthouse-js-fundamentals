const talkingCalendar = function(date) {
  let day = date.slice(8, 19)

  let newDay = "";
  if (day.charAt(0) === "0") {
    newDay = day.slice(1, 2);
  } else {
    newDay = day;
  }

  let dayDate = "";
  if (newDay === "1" || newDay === "21" || newDay === "31") {
    dayDate = newDay + "st";
  } else if (newDay === "2" || newDay === "22") {
    dayDate = newDay + "nd";
  } else if (newDay === "3" || newDay === "23") {
    dayDate = newDay + "rd";
  } else {
    dayDate = newDay + "th";
  }

  let year = date.slice(0, 4);

  let month = date.slice(5, 7)

  switch (month) {
    case "01":
      return "January " + dayDate + ", " + year
    case "02":
      return "February " + dayDate + ", " + year
    case "03":
      return "March " + dayDate + ", " + year
    case "04":
      return "April " + dayDate + ", " + year
    case "05":
      return "May " + dayDate + ", " + year
    case "06":
      return "June " + dayDate + ", " + year
    case "07":
      return "July " + dayDate + ", " + year
    case "08":
      return "August " + dayDate + ", " + year
    case "09":
      return "September " + dayDate + ", " + year
    case "10":
      return "October " + dayDate + ", " + year
    case "11":
      return "November " + dayDate + ", " + year
    case "12":
      return "December " + dayDate + ", " + year
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
