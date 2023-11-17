let score: number | string = 33; // union

score = "45";
type User = {
  name: string;
  id: number;
};
type Admin = {
  userName: string;
  id: number;
};

let Ajay: User | Admin = {
  // union
  name: "Ajay",
  id: 23,
};

Ajay = { userName: "Ajay Dhanraj Sonar", id: 24 };

function getID(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const data2: string[] = ["Ajay", "Dhanraj", "Sonar"];
//const data3: string[] | number[] = ["Ajay","Dhanraj","Sonar",3] we cannot do this
const data3: (string | number | boolean)[] = [
  true,
  "Ajay",
  "Dhanraj",
  "Sonar",
  3,
]; // but we can tp this

let pi: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"

let result: string | boolean = "ok";

result = true;

//Question 2

type person =
  | {
      name: string;
      age: number;
    }
  | {
      username: string;
    };

let userInfo: person = { name: "Ajay", age: 22 } ;
let userInfo2: person = { username: "XXXX" };
console.log(userInfo);
console.log(userInfo2);

export {};
