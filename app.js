let sum={
    num1 :5,
    num2 :3,
    calculateSum : function() {
        return this.num1+this.num2;
    }
}

let sum1 =sum.calculateSum();
console.log("somme initiale : "+sum1);


sum.num1=10;
let sum2 =sum.calculateSum();
console.log("somme initiale : "+sum2);

sum.num3 = 20;
console.log(sum.num3);


let Products=[
    { id:1,name:"milk",price:1500},
    { id:2,name:"chocolate",price:3500},
    { id:3,name:"sweets",price:1200},
]

// Loop through the products array using a for loop
for(let key in Products){
    console.log(Products[key]);
}

// Print the ID, name, and price of each product.
for(let key in Products){
    for(let i in Products[key]){
        console.log("Product "+i +" : "+ Products[key][i]);
    }
    console.log("---------------");
}