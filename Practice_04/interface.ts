interface User {
  readonly dbID: number;
  email: string;
  userID: number;
  googleID?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

// we can reopen interface
interface User {
  githubID: string;
}

// we can extend interface to achieve inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const Ajay: Admin = {
  dbID: 32,
  email: "XXXXXXXXXXXXXX",
  userID: 23232,
  githubID: "XXXXXXXXXXXXXX",
  role: "learner",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "Ajay Dhanraj Sonar", off: 25) => {
    return off;
  },
};

console.log(Ajay);

export {};
