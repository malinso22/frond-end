// 1. Destructuring (Array & Object)
//Array Destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // Output: 1 2 3


//Object Destructuring:

const person = { name: 'John', age: 32 };
const { name, age } = person;
console.log(name, age); // Output: John 32


//2. Destructuring dengan Mengambil Sebagian Item (Array & Object)
//Array Destructuring:

const fruits = ['Apple', 'Banana', 'Mango'];
const [firstFruit, , thirdFruit] = fruits;
console.log(firstFruit, thirdFruit); // Output: Apple Mango


//Object Destructuring:

const car = { brand: 'Toyota', model: 'Corolla', year: 2020 };
const { brand, year } = car;
console.log(brand, year); // Output: Toyota 2020


//3. Destructuring dengan Menggunakan Default Value (Array & Object)
//Array Destructuring dengan Default Value:
const colors = ['Red'];
const [firstColor, secondColor = 'Blue'] = colors;
console.log(firstColor, secondColor); // Output: Red Blue

//Object Destructuring dengan Default Value:
const user = { username: 'john_doe' };
const { username, role = 'guest' } = user;
console.log(username, role); // Output: john_doe guest

//4. Destructuring dengan Rest Operator
//Array Destructuring dengan Rest Operator:
const digits = [1, 2, 3, 4, 5];
const [firstDigit, secondDigit, ...restDigits] = digits;
console.log(firstDigit, secondDigit); // Output: 1 2
console.log(restDigits); // Output: [3, 4, 5]

//objeck Destructuring dengan Rest Operator
const book = { title: 'JavaScript Basics', author: 'John Doe', year: 2021 };
const { title, ...rest } = book;
console.log(title); // Output: JavaScript Basics
console.log(rest); // Output: { author: 'John Doe', year: 2021 }

//mengubah exercice 6 menjadi Destructuring
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

function yearUntilRetirement({ year, firstName }) {
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
}

yearUntilRetirement({ year: 1987, firstName: 'John' });
const addNumber = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));
const phi = 3.14;

const calculateArea = ({ radius, power }) => {
    return phi * Math.pow(radius, power);
};

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
};

makeAjaxRequest('www.google.com');