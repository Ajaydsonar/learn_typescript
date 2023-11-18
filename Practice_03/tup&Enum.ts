// In TypeScript, a tuple is a fixed-size, ordered list with elements of specific types. It provides a structured way to represent collections where the length and types are predefined and fixed.

let user: [string, number, boolean]; // we can't change the order of data in tuple

user = ["Ajay", 20, true];

let rgb: [number, number, number] = [233, 132, 124];

type ajay = [number, string];

const userOne: ajay = [123, "Ajay"];

userOne[0] = 122; // first drawbacks of tuple
userOne.push("oks"); // drawbacks of tuples

console.log(userOne);

let point = [3, 4] as const;

function ok([x, y]: readonly [number, number]) {
  console.log(x, y);
  
}

// ok(point);
ok([2, 3]);

export {};
