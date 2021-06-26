//four rooms: the ballroom, gallery, billiards room, and dining room,
let room = "ballroom";

//four weapons: poison, a trophy, a pool stick, and a knife,
let weapon;

//four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
let suspect = "Mr. Kalehoff";

let solved;

/* 
the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.
*/

/*
Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.
*/

if (room === "ballroom" && suspect === "Mr. Kalehoff") {
  weapon = "poison";
  solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
  weapon = "trophy";
  solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
  weapon = "pool stick";
  solved = true;
} else if (room === "dining room" && suspect === "Mr. Parkes") {
  weapon = "knife";
  solved = true;
} else {
  solved = false;
  console.log();
}

if (solved) {
  console.log(suspect+" did it in the "+room+" with the "+weapon+"!"); 
}