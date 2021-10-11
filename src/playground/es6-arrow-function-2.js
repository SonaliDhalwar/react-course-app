//arguments objects- no longer bound with arrow functions

const add =(a,b) => {
//console.log(arguments);
return a+b;
};

console.log(add(55,1,100));

//this keyword - no longer bound

const user ={
name : 'lily',
cities: ['New York','Mumbai', 'Dublin'],
printPlaceLived() {
    return this.cities.map((city) => this.name + 'has lived in' + city);
}
};

console.log(user.printPlaceLived());

// challenge of print multiples

const multiplier = {
numbers:[10, 20,30],
multiplyBy:3,
multiply(){
    return this.numbers.map((Number) => Number * this.multiplyBy);

}
};

console.log(multiplier.multiply());             //[1,2,3]  2[2,4,6]