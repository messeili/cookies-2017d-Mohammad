"use_strict"

var workingHours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ',
    '12am ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
var total = 0;
var parentElement = document.getElementById("mainid");

var allLocations = [];
function Branch(name, minCustPerH, maxCusPerH, avgCookeisPerCustomer) {
    this.name = name;
    this.minCustPerH = minCustPerH,
        this.maxCusPerH = maxCusPerH;
    this.avgCookeisPerCustomer = avgCookeisPerCustomer;
    this.custPerHour = [];
    this.cookeisPerHour = [];
    this.totalCookeisPerDay = 0;

    allLocations.push(this);

}

Branch.prototype.generateRandomNumberOfCustomers = function () {
    for (let index = 0; index < workingHours.length; index++) {
        var generateRandomCustomer = Math.floor(getRandomNumber(this.minCustPerH, this.maxCusPerH));
        this.custPerHour.push(generateRandomCustomer)
    }
}

Branch.prototype.calculateCookeisPerHour = function () {
    for (let index = 0; index < this.custPerHour.length; index++) {
        var noCookeisPerHour = Math.ceil(this.avgCookeisPerCustomer * this.custPerHour[index]);
        this.cookeisPerHour.push(noCookeisPerHour);
        this.setTotalNumberOfCookeisPerDay(noCookeisPerHour);
        console.log(noCookeisPerHour);

    }
}

Branch.prototype.setTotalNumberOfCookeisPerDay = function (noCookeisPerHour) {
    this.totalCookeisPerDay = this.totalCookeisPerDay + noCookeisPerHour;
    console.log(this.totalCookeisPerDay);
}

Branch.prototype.printFun = function () {

    var raw = document.createElement('tr');
    var column = document.createElement('td');
    column.textContent = this.name;
    raw.appendChild(column);
    parentElement.appendChild(raw);
    for (var i = 0; i < workingHours.length; i++) {
        colomn = document.createElement('td');
        colomn.textContent = this.cookeisPerHour[i];
        raw.appendChild(colomn);
    }
    console.log(this.cookeisPerHour);
    column = document.createElement('td');
    column.textContent = this.totalCookeisPerDay
    raw.appendChild(column);
    parentElement.appendChild(raw);

}

function tableFooter() {
    raw = document.createElement('tr');
    parentElement.appendChild(raw);
    var columnTwo = document.createElement('td');
    raw.appendChild(columnTwo);
    columnTwo.textContent = ("Total ")
    for (let i = 0; i < workingHours.length; i++) {
        for (let index = 0; index < allLocations.length; index++) {
            total = total + allLocations[index].cookeisPerHour[i];
        }
        columnTwo = document.createElement('td');
            raw.appendChild(columnTwo);
            columnTwo.textContent = (total)
            total = 0;
    }
    columnTwo = document.createElement('td');
            raw.appendChild(columnTwo);
            for (let j = 0; j < allLocations.length; j++) {
                total = total + allLocations[j].totalCookeisPerDay;
            }
            columnTwo.textContent = (total)
}

function tableHeader() {
    raw = document.createElement('tr');
    parentElement.appendChild(raw);
    var columnTwo = document.createElement('th');
    raw.appendChild(columnTwo);
    columnTwo.textContent = ("Location")
    for (let index = 0; index < this.workingHours.length; index++) {
        columnTwo = document.createElement('th');
        raw.appendChild(columnTwo);
        columnTwo.textContent = (workingHours[index])

    }
    columnTwo = document.createElement('th');
    raw.appendChild(columnTwo);
    columnTwo.textContent = 'Totals'

}


getRandomNumber = function (min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

var seattle = new Branch('Seattle', 23, 65, 6.3);
var tokyo = new Branch('Tokyo', 3, 24, 1.2);
var dubai = new Branch('Dubai', 11, 38, 3.7);
var paris = new Branch('Paris', 20, 38, 2.3);
var lima = new Branch('Lima', 2, 16, 4.6);

for (let index = 0; index < allLocations.length; index++) {
    allLocations[index].generateRandomNumberOfCustomers();
    allLocations[index].calculateCookeisPerHour();

}

tableHeader();

for (let index = 0; index < allLocations.length; index++) {
    allLocations[index].printFun();
}

tableFooter();
