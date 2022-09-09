// primitív adattípusok//

// number;
// string;
// boolean;
// undefined;
// null;

// bigint;
// symbol;

console.log("hello".toUpperCase());

const string = new String("hello");
const pizza = {
  name: "margherita",
  price: 42,
};

const createPizza = (pizzaName, pizzaPrice) => {
  return {
    name: pizzaName,
    price: pizzaPrice,
    details: function () {
      console.log(this.name, this.price * 2);
    },
  };
};

const pizza1 = createPizza("dd", 4);
pizza1.details();

// console.log(createPizza(pizza.name, pizza.price));

// const pizza2 = new Object(); //az objectek belsejét const esetén is lehet módosítani //
// console.log(pizza2);
// pizza2.name = "Songoku";
// console.log(pizza2);

class Pizza {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  details() {
    console.log(this.name, this.price);
  }
}

const pizza3 = new Pizza("kolbászos rájás", 76);
pizza3.details();
