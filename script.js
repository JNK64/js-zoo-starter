//starter code
//      python -m http.server
//      help.gigamonkeys.com

let AnimalPopulation = 0;

function run() {

  let tigger = new Tiger("tigger");
  tigger.eat("meat");

  console.log("");

  let pooh = new Bear("Pooh");
  pooh.eat("fish");
  pooh.eat("meat");

  console.log("");

  let Rarity = new Unicorn("Rarity");
  Rarity.eat("marshmallows");
  Rarity.eat("meat");

  console.log("");

  let Gemma = new Giraffe("Gemma");
  Gemma.eat("leaves");
  Gemma.eat("meat");

  console.log("");

  let Stinger = new Bee("Stinger");
  Stinger.eat("pollen");
  Stinger.eat("meat");

  console.log("");

  let ZoeBot = new ZooKeeper("ZoeBot", [tigger, pooh, Rarity, Gemma, Stinger]);
  ZoeBot.feedAnimals("sushi");

  console.log("");

  console.log("the number of animals in the zoo is " + Animal.getPopulation());

}

/* function sleep(name) {
  console.log(name + " sleeps for 8 hours")
}

function eat(name,food){
  if (food == favoriteFood){
    console.log ( name + " eats " + food);
    console.log ("YUM!!! " + name + " wants more " + food)
  } else {
    console.log(name + " eats " + food);
    sleep(name);
  }
}
*/

class Animal{
  constructor(name,favFood){
    this.name = name;
    this.favFood = favFood;

    AnimalPopulation++;
  }

  static getPopulation(){
    return AnimalPopulation;
  }

  sleep(){
    console.log(this.name + " sleeps for 8 hours");
  }

  eat(food){
    if (food == this.favFood){
      console.log (this.name + " eats " + food);
      console.log ("YUM!!! " + this.name + " wants more " + food)
    } else {
      console.log (this.name + " eats " + food);
      this.sleep();
      }
    }
}

class Tiger extends Animal{
  constructor(name){
    super (name, "meat")
  }


}

class Bear extends Animal{
  constructor(name){
    super (name, "fish")
  }

  sleep(){
    console.log(this.name + " hibernates for 4 months");
  }

}

class Unicorn extends Animal{
  constructor(name){
    super (name, "marshmallows");
  }

  sleep(){
    console.log(this.name + " sleeps in a cloud");
  }
}

class Giraffe extends Animal{
  constructor(name){
    super (name, "leaves");
  }

  eat(food){
    if (food == "leaves"){
      super.eat("leaves");
      this.sleep();
  } else {
    console.log("YUCK!!!" + this.name + " will not eat "  + food);
  }
  
  }
}

class Bee extends Animal{
  constructor(name){
    super (name, "pollen")
  }

  eat(food){
    if (food == this.favFood){
      super.eat("pollen");
      this.sleep();
    } else {
      console.log("YUCK!!!" + this.name + " will not eat "  + food);
    }
  }

  sleep(){
    console.log(this.name + " never sleeps")
  }
}

class ZooKeeper{
  constructor(name, animals){
    this.name = name;
    this.animals = animals;
  }

  feedAnimals(food){
    console.log(this.name + " is feeding " + food + " to " + this.animals.length + " of " + AnimalPopulation + " total animals");

    for (let i = 0; i < this.animals.length; i++){
      this.animals[i].eat(food);
    }
  }
}


