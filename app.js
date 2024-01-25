          //Exercise 1
class Person{
  constructor(name,pets,residences,hobbies=[]){
    this.name = name;
    this.pets = pets;
    this.residences = residences;
    this.hobbies = hobbies;
  }

  addHobby(hobbies){
    this.hobbies.push(hobbies);
  }

  removeHobby(hobbies){
    this.hobbies = this.hobbies.filter((element)=>{
      return !(element== hobbies);
    });
  }
  greeting(){
    console.log(`hello, fellow person!`);
   }
}
          //Exercise 2
class Coder extends Person{
  constructor(name,pets,residences,hobbies, occupation){
    super(name,pets,residences,hobbies);

    this.occupation = occupation;
  }
   greeting() {
    console.log(`Hello, fellow coder! I'm a ${this.occupation}.`);
  }
}


          //Exercise 3
let coder = new Coder("c",3,3, ["b","c","d"],"Full Stack Web Dev");

coder.addHobby("e");
console.log(coder);
coder.greeting();

          //Exercise 4
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    this.result = (a || this.result) + b;
    return this.result;
  }

  subtract(a, b) {
    this.result = (a || this.result) - b;
    return this.result;
  }

  multiply(a, b) {
    this.result = (a || this.result) * b;
    return this.result;
  }

  divide(a, b) {
    if (b !== 0) {
      this.result = (a || this.result) / b;
    } else {
      console.error("Cannot divide by zero");
    }
    return this.result;
  }

  displayResult() {
    console.log(this.result);
  }
}

const calculator= new Calculator();

calculator.add(5, 3); 
calculator.displayResult(); 

calculator.subtract(10, 4); 
calculator.displayResult(); 

calculator.multiply(2,3); 
calculator.displayResult(); 

calculator.divide(5,2);
calculator.displayResult();









  