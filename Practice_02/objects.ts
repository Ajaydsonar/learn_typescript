const User = {
  name: "Ajay",
  email: "ajay@gmail.com",
  isActive: true,
};

// weiredness of Typescript
function createUser({ name: string, isPaid: boolean }) {}

const newUser = { name: "Ajay", isPaid: true, email: "Ajay@andyees.com" };
createUser(newUser);

//returning an object from a function
function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 299 };
}

// type aliases in Typescript

type User = {
  name: string;
  email: string;
  age: number;
};

const user2 = { name: "Ajay", email: "ajay@gmail.com", age: 25 };

function createUser2(user: User): User {
  return user;
}

console.log(createUser2(user2));

type User2 = {
  readonly _id: string; // readonly is use to make property readonly we cannot change them
  name: string;
  age: number;
  isActive: boolean;
  cardDetails?: number; // ? is used to make any property obtional
};

const ajay: User2 = {
  _id: "Ajay",
  name: "Ajay",
  age: 25,
  isActive: true,
};

console.log(ajay);

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};
type cardCvv = {
  cardcvv: string;
};

type cardDetails = cardNumber &
  cardDate &
  cardCvv & {
    cardExpiry: number;
  };

const useCase: cardDetails = {
  cardnumber: "1234",
  carddate: "12/12/20",
  cardcvv: "123",
  cardExpiry: 24,
};

export {};
