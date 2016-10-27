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



var statement = "";
var newArray = [];
for (var i = 0; i < employees.length; i++) {
  var statementArray = bonusCalculation(employees[i]);
  statement = statementArray[0] + "'s" + " bonus % is " + statementArray[1] + "%. Making their annual salary " + statementArray[2] + " including the bonus of "+ statementArray[3] + ".\n";
  newArray.push(statement);
}

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
