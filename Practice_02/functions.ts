function addTwo(num:number):number{
    return num + 2;
}

function getUpper(val:string):string{
    return val.toUpperCase();
}

function signUpUser(name:string,email:string,isPaid:boolean){

}

let loginUser = (email:string,password:string,isPaid:boolean=false)=>{

}

addTwo(3);
getUpper('Ajay')
signUpUser("Ajay Dhanraj Sonar","ajay@andyees.com",true)
loginUser("Ajay","okajay");


function getValue(myVal:number){
    if(myVal > 5){
        return true;
    }
    return "200 OK";
}

const arrow = (s:string):string=>{
    return "OK"
}

const heros = ["thor","spiderman","ironman"];

heros.map((hero):string =>{
    return `hero is ${hero}`
})

// void 

function consoleError(errMsg:string):void{
    console.log(errMsg);
}

// never 

function handleError(errMsg:string):never{
    throw new Error(errMsg);
}

function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

export{}