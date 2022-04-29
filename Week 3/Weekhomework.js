const PizzaToppings = ['Pepperoni', 'Sausage', 'Peppers', 'Onions'];
function greetCustomer(Toppings) {
  let greeting = "Welcome to johnny's Pizza we offer";
  for (let Topping of Toppings) {
    greeting += ` ${Topping}`
  };
  console.log(greeting);
};
greetCustomer(PizzaToppings);

function getPizzaOrder(size, crust, ...Toppings){
  let order = `One ${size} ${crust} pizza with `;
for(let topping of Toppings){

}
  console.log(order + `Coming Up!`);
  return [size, crust, Toppings];
};
getPizzaOrder(`Large`, `Thick `, `sausage ` , `Hamburger ` , `Peppers`);
