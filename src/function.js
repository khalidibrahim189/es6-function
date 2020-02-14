// => function declaration

function hello(name){
    console.log("helo " + name);
}
hello("mario");

function perkalian(a, b){
    return a * b;
}

let result = perkalian(3, 9);
console.log(result);

// => function expression

const hello2 = function(name){
    console.log("hello " + name);
};
hello2("rian");


// => arrow function

const hello3 = name => {
    console.log("hello " + name);
};
hello3("joni");


const perkalian2 = (a, b) => a * b;
    console.log(perkalian(8, 10));

// IIFE -> autorun
(function(){
    console.log("kepo kayak mantan");
})();
