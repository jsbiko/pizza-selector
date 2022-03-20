//selection 
$(document).ready(function () {
    function Pizza(type, size, topping, crust) {
      this.type = type;
      this.size = size;
      this.topping = topping;
      this.crust = crust;
    }
    Pizza.prototype.getPizzaPrice = function () {
      return this.getCrustPrice() + this.getToppingPrice() + this.getTypePrice();
    };
    Pizza.prototype.getToppingPrice = function () {
      if (this.size === "large") {
        if (this.topping === "cheese") {
          return 90;
        } else if (this.topping === "mushroom") {
          return 80;
        } else {
          return 100;
        }
      } else if (this.size === "medium") {
        if (this.topping === "cheese") {
          return 50;
        } else if (this.topping === "mushroom") {
          return 50;
        } else {
          return 90;
        }
      } else {
        if (this.topping === "cheese") {
          return 40;
        } else if (this.topping === "mushroom") {
          return 50;
        } else {
          return 90;
        }
      }
    };
    Pizza.prototype.getCrustPrice = function () {
      if (this.crust === "thick") {
        return 100;
      } else {
        return 50;
      }
    };
    Pizza.prototype.getTypePrice = function () {
      if (this.size === "large") {
        if (this.type === "chicken tikka") {
          return 1100;
        } else if (this.type === "peri peri") {
          return 1200;
        } else {
          return 1000;
        }
      } else if (this.size === "medium") {
        if (this.type === "chicken tikka") {
          return 750;
        } else if (this.type === "peri peri") {
          return 850;
        } else {
          return 780;
        }
      } else {
        if (this.type === "chicken tikka") {
          return 500;
        } else if (this.type === "peri peri") {
          return 550;
        } else {
          return 500;
        }
      }
    };
    let customerName = ""; //options
    let totalCost = 0;
    let pizzasOrdered = [];
    let estate = "";
    let houseNumber = "";
    $("#pizza-form").submit(function (e) { //selection variables
      e.preventDefault();
      let typeSelected = $("#type").val();
      let sizeSelected = $("#pizzaSize").val();
      let toppingSelected = $("#topping").val();
      let crustSelected = $("#crust").val();
      let newPizza = new Pizza(
        typeSelected,
        sizeSelected,
        toppingSelected,
        crustSelected
      );
