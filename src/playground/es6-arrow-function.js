function square(x){
    return x * x;
};
console.log(square(5));

//const squareArrow = (x) => {
//return x * x;
//};

const squareArrow = (x) => x * x;
console.log(squareArrow(4));

//getfirstname('mike smith') -> mike

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));