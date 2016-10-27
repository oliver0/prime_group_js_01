var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

// ["employees name", "bonus percentage", "base annual + bonus", "total bonus to nearest dollar"]

function bonusCalculation(arrEmployees){
  var employeeBonus = [];
  var bonus = 0;
  employeeBonus[0] = arrEmployees[0];
switch(arrEmployees[3]) {
  case 1:
    bonus = 0;
    break;
  case 2:
    bonus = 0;
    break;
  case 3:
    bonus = .04;
    break;
  case 4:
    bonus = .06;
    break;
  case 5:
    bonus = .10;
    break;
  default: return false;
  }
  if (arrEmployees[1].length == 4) {
    bonus += .05;
  }
  if (arrEmployees[2] > 65000) {
    bonus -= .01;
  }
  if (bonus > .13) {
    bonus = .13;
  }
  if (bonus < 0) {
    bonus = 0;
  }
  var bonusPercent = bonus * 100;
  employeeBonus[1] = bonusPercent;
  employeeBonus[2] = arrEmployees[2] * (1 + bonus);
  employeeBonus[3] = Math.round(arrEmployees[2] * bonus);
  return employeeBonus;
  }
for (var i = 0; i < employees.length; i++) {
  console.log(bonusCalculation(employees[i]));
}
