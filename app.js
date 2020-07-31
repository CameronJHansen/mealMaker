// Meal Maker Menu Object
const menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : []
  },
  get appetizers() {
    return this._courses[appetizers];
  },
  set appetizers(appetizersInput) {
    this._courses[appetizers] = appetizersInput;
  },
  get mains() {
    return this._courses[mains];
  },
  set mains(mainsInput) {
    this._courses[mains] = mainsInput;
  },
  get desserts() {
    return this._courses[desserts];
  },
  set desserts(dessertsInupt) {
    this._courses[desserts] = dessertsInput;
  },
  get courses() {
    return {
      appetizers : this.appetizers,
      mains : this.mains,
      desserts : this.desserts
    };
  },

  // Pushes new dish objects to course arrays
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name : dishName,
      price : dishPrice
    };
    this._courses[courseName].push(dish); 
  },

  // Helper function: generates random dish from single course array
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  // Generates 3-course meal at random & displays results with price
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalCost = appetizer.price + main.price + dessert.price;
    return `
    Your appetizer is: ${appetizer.name}.
    Your main course is: ${main.name}.
    Your dessert is: ${dessert.name}.
    Your total cost is: $${totalCost.toFixed(2)}`;
  }
};

// 9 dishes are added to menu, 3 for each course
menu.addDishToCourse('appetizers', 'Wings', 8.95);
menu.addDishToCourse('appetizers', 'Nachos', 6.50);
menu.addDishToCourse('appetizers', 'Mini Tacos', 11.95);
menu.addDishToCourse('mains', 'New York Strip', 24.95);
menu.addDishToCourse('mains', 'Double Cheeseburger', 14.95);
menu.addDishToCourse('mains', 'Salmon', 18.50);
menu.addDishToCourse('desserts', 'Key Lime Pie', 12.95);
menu.addDishToCourse('desserts', 'Brownie Pie', 10.95);
menu.addDishToCourse('desserts', 'Tiramisu', 16.50);

// Official invocation
let meal = menu.generateRandomMeal();
console.log(meal);