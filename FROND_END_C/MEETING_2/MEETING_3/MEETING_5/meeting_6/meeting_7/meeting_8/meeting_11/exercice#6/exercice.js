const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  retirement > 0
    ? console.log(`${firstName} retires in ${retirement} years`)
    : console.log(`${firstName} is already retired.`);
};

yearUntilRetirement({ year: 1987, firstName: 'John' });
const addNumber = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
  };
  
  console.log(addNumber(1, 2, 3, 4, 5, 6, 7));
  const phi = 3.14;

  const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power);
  
  let radius = 21;
  const area21 = calculateArea({ radius });
  
  radius = 7;
  const area7 = calculateArea({ radius });
  
  console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
  const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
  };
  
  makeAjaxRequest('www.google.com');      