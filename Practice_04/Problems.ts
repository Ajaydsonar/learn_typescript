// interface userInfo {
//   readonly userID: string;
//   username: string;
//   email: string;
//   password: string;
//   accountType: string;
// }

// interface user extends userInfo {
//   age: number;
// }

// const newUser: user = {
//   userID: "csfsd",
//   username: "AjayDhanrajSonar",
//   email: "XXXXXXXXXXXXXX",
//   password: "XXXXXXXXXXXXXX",
//   accountType: "XXXXXXXXXXXXXX",
//   age: 21,
// };

// // console.log(newUser);

// class Student {
//   fullName: string;

//   constructor(
//     public firstName: string,
//     public middleInitial: string,
//     public lastName: string
//   ) {
//     this.fullName = firstName + " " + middleInitial + " " + lastName;
//   }

//   show(): string {
//     return this.fullName;
//   }
// }

// class Student2 extends Student {
//   constructor(
//     public firstName: string,
//     public middleInitial: string,
//     public lastName: string,
//     public age: number
//   ) {
//     super(firstName, middleInitial, lastName);
//     this.age = age;
//   }
// }

// function greeter(Person: cardDetails): string {
//   return "Hello, " + Person.firstName + " " + Person.lastName;
// }

// type cardDetails = {
//   firstName: string;
//   lastName: string;
// };

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// const user1 = new Student2("Ajay", "Dhanraj", "Sonar", 20);
// // console.log(user1.age);

// const final = greeter(user1);
// // console.log(final);

// task 1

interface callBack {
  fn(num: number): void;
}

const ok: callBack = {
  fn: (num) => {
    console.log("num : " + num);
  },
};

ok.fn(2);

// task 2

interface vehicles {
  model: string;
  year: number;
  price: number;
}

interface car extends vehicles {
  type: string;
}

interface Truck extends vehicles, car {}

const car1: car = { type: "car", model: "One", year: 2021, price: 10000 };
const Truck1: car = { type: "Truck", model: "Two", year: 2023, price: 20000 };

// console.log(car1);
// console.log(Truck1);

// task 3 : Generic Types

interface Box<T> {
  value: T;
}

let obj: Box<number> = { value: 1 };
let obj2: Box<string> = { value: "Ajay" };

function use<T>(para: Box<T>): Box<T> {
  return para;
}

let ok1: Box<number> = use({ value: 23 });
console.log(ok1);
let ok2: Box<string> = use(obj2);
console.log(ok2);

// task 4

interface ApiResponse {
  status: number;
  data: {
    readonly userID: string;
    name: string;
    age: number;
    username: string;
    isActive: boolean;
  };
}

const response: ApiResponse = {
  status: 200,
  data: {
    userID: "Aj",
    name: "Ajay",
    age: 21,
    username: "XXXX",
    isActive: true,
  },
};

// Task 5

interface vehicless {
  model: string;
  year: number;
  start(): string;
}

class Cars implements vehicless {
  model: string;
  year: number;
  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }
  start(): string {
    return "Your model : " + this.model;
  }
}

const car3 = new Cars("Ajay", 21);
console.log(car3);
