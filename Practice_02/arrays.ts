const names: string[] = [];
// const marks: number[] = [];
const marks: Array<number> = []; // we can also define Array of type as Array<type>

type User = {
  name: string;
  marks: number;
};

const allUsers: Array<User> = []; // we can also use like User[] instead of Array<User>
const MLModels: number[][] = [
  [1, 2, 3],
  [255, 235, 135],
];

MLModels.push([255, 255, 255]);
names.push("Ajay");
marks.push(100);
allUsers.push({ name: "Ajay", marks: 100 });
