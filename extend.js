class Animal {
  constructor(aname) {
    this.name = aname;
    this.kingdom = "Animalia";
    this.alive = true;
  }
  roar() {
    alert("meow");
  }
  sayHi() {
    console.log("hi");
  }
}

class Feral extends Animal {
  constructor(aname) {
    super(aname);
    this.cute = "kawaii";
    this.fang = true;
  }
  play() {
    console.log("kill human");
  }
}

let dog = new Animal("Bog");
let cat = new Feral("Mimi");

dog.kingdom; // ได้ Animalia
cat.Kingdom; // ได้ Animalia

dog.cute; // undefined
cat.cute; // "kawaii"


class Kitchen {
  constructor(name,age) {

    this.


    
  }
}
