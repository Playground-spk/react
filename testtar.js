class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  can_say() {
    console.log(`my name is ${this.name}`);
  }
  can_jump() {
    console.log(`${this.name} is Jumping`);
  }
  show_age() {
    console.log(`${this.name} is ${this.age} year old`);
  }
}

class Superman extends Human {
  constructor(name, age, power) {
    super(name, age);
    //this.name = name;
    //this.age = age;
    this.power = power;
  }
  can_fly() {
    console.log(`${this.name} flying !`);
  }
  show_power() {
    console.log(`${this.name} have ${this.power} power !`);
  }
}

let guitar = new Human("Tar", 20);
guitar.can_say();
guitar.can_jump();
guitar.show_age();

let sonter = new Superman("sonter", 23, 200);
sonter.can_say();
sonter.can_jump();
sonter.show_age();
sonter.can_fly();
sonter.show_power();
