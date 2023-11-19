const enum SeatChoice {
  AISLE = "10", //we can change the value
  MIDDLE = 12,
  WINDOW,
  FOURTH,
}

const hcSeat = SeatChoice.FOURTH;
console.log(hcSeat);

enum ErrorCode {
  NotFound = 404,
  InternalServerError = 500,
  Unauthorized = 401,
}

// heterogenous
enum Status {
  ok = 200,
  InternalServerError = 500,
  Unauthorized = 401,
}

enum Direction {
  East,
}

const direction: Direction = Direction.East;

let response = ErrorCode.Unauthorized;

// task 1

enum days {
  monday = 1,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

function showDay(day: number): void {
  if (day === days.sunday || day === days.saturday) {
    console.log(`it's ${days[day]} weekend`);
  } else {
    console.log(`it's ${days[day]}`);
  }
}

showDay(1);
showDay(2);
showDay(3);
showDay(4);
showDay(5);
showDay(6);
showDay(7);


// task 2

export {};
