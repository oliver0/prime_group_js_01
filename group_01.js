var atticus = new Person("Atticus","2405", "47000", 3); //["Atticus", "2405", "47000", 3];
var jem = new Person("Jem", "62347", "63500", 4);//("Jem", "62347", "63500", 4) //["Jem", "62347", "63500", 4];
var boo = new Person("Boo", "11435", "54000", 3);//["Boo", "11435", "54000", 3];
var scout = new Person("Scout", "6243", "74750", 5);//["Scout", "6243", "74750", 5];
var robert = new Person("Robert", "26835", "66000", 1);//["Robert", "26835", "66000", 1];
var mayella = new Person("Mayella", "89068", "35000", 2);//["Mayella", "89068", "35000", 2];

function Person(name, employeeNumber, annualSalary, reviewRating){
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.annualSalary = annualSalary;
  this.reviewRating = reviewRating;
}

var employees = [atticus, jem, boo, scout, robert, mayella];

function bonusCalculation(employee){
  var employeeBonus = {};
  var bonus = 0;
  var name = employee.name;

switch(employee.reviewRating) {
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
  if (employee.employeeNumber.length == 4) {
    bonus += .05;
  }
  if (employee.annualSalary> 65000) {
    bonus -= .01;
  }
  if (bonus > .13) {
    bonus = .13;
  }
  if (bonus < 0) {
    bonus = 0;
  }

  employeeBonus.name = employee.name;
  employeeBonus.bonusPercent = bonus * 100;
  employeeBonus.annualSalary = employee.annualSalary * (1 + bonus);
  employeeBonus.roundedBonus = Math.round(employee.annualSalary * bonus);

  return employeeBonus;
  }

  var employeeBonusArray = [];
  for(i=0; i < employees.length; i++){
    employeeBonusArray.push(bonusCalculation(employees[i]));
  }
  console.log(employeeBonusArray);


/*
Below is previous code used to get the code on to HTML

var statement = "";
var newArray = [];
for (var i = 0; i < employees.length; i++) {
  //var statementArray = bonusCalculation(employees[i]);

  //statement = statementArray[0] + "'s" + " bonus % is " + statementArray[1] + "%. Making their annual salary " + statementArray[2] + " including the bonus of "+ statementArray[3] + ".\n";

  newArray.push(bonusCalculation(employees[i]));
}
//console.log(newArray);
/*
function makeUL() {
    var list = document.createElement('ul');

  for(var i = 0; i < newArray.length; i++) {
    var item = document.createElement('li');
    var string = String(newArray[i]);
    item.appendChild(document.createTextNode(string));
    list.appendChild(item);
  }
  return list;
}

document.getElementById('container').appendChild(makeUL(newArray[0]));
*/
