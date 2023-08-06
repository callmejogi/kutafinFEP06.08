class IceCream {
    constructor(size, type, topping){
        this.size = size;
        this.type = type;
        this.topping = [];
    }

    static S = {price:10, calories:100};
    static M = {price:20, calories:200};
    static L = {price:30, calories:300};

    static cocky = {price:20, calories:65};
    static fancy = {price:25, calories:0};

    static vanilla = {price:15, calories:100};
    static choco = {price:15, calories:100};
    static fruity = {price:15, calories:100};
    static cum = {price:50, calories:200};

    addTopping(topping){
        this.topping.push(topping);
    }

    calculatePrice(){
        let totalPrice = this.size.price + this.type.price;
        this.topping.forEach((topping) => {
            totalPrice += topping.price
        });

        return totalPrice
    };

    calculateCalories(){
        let totalCalories = this.size.calories + this.type.calories;

        this.topping.forEach((topping) => {
            totalCalories += topping.calories
        });
        return totalCalories;
    }

}   

const pussy = new IceCream(IceCream.S, IceCream.cocky)

pussy.addTopping(IceCream.cum);
console.log("Calories: " + pussy.calculateCalories());

  // скільки коштує
  console.log("Price: " + pussy.calculatePrice() + "$");
  
  // я тут передумав і вирішив додати ще приправу
    pussy.addTopping(IceCream.vanilla);
  
  // А скільки тепер коштує?
  console.log("Price with extra: " + pussy.calculatePrice()+ "$");