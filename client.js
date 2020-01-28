const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

for( let i=0; i<employees.length; i++ ){
  console.log(employees[i]);

}

function employeeCalculation(employee){
  let employeeObject = {
    name: employee.name,
    bonusPercentage: employee.bonusPercentage,
    totalCompensation: employee.totalCompensation,
    totalBonus: employee.totalBonus

    if (employees.reviewRating<= 2){
      return 0;
    } else if {(employees.reviewRating == 3)
    return .04 * employees.annualSalary;
  } else if{(employees.reviewRating == 4)
    return .06 * employees.annualSalary;
  } else if{(employees.reviewRating == 5)
    return .10 * employees.annualSalary;
  }else if{(employees.employeeNumber.length == 4)
   return .05 * employees.annualSalary;

}

// if (employee.reviewRating<= 2){
//   console.log("No Bonus");
// // } else if {(employee.reviewRating==3)
//   return (employee.annualSalary * reviewPercentage)
//
// }

let finalEmployeeBonusInfo= [];
console.log("in finalEmployeeBonusInfo");

function calculateBonus(){

}


// name:
// bonusPercentage
// totalCompensation
// totalBonus


// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
