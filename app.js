"use_strict"

var seattle = {
    name: 'Seattle',
    minCustPerH: 23,
    maxCusPerH: 65,
    avgCookeisPerCustomer: 6.3,
    custPerHour: 0,
    amountOfCookeis: 0,
    workingHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ',
        '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],

    getAmountOfCookeis: function (min, max) {
        this.amountOfCookeis = Math.floor(generateCustomerPerHour(min, max) * this.avgCookeisPerCustomer);
        return this.amountOfCookeis;
    },
    printFun: function () {
        var total = 0;
        var parentElement = document.getElementById("mainid");
        var articleOne = document.createElement('article');
        var headingTwo = document.createElement('h2');
        parentElement.appendChild(headingTwo);
        parentElement.appendChild(articleOne);
        headingTwo.textContent = this.name;
        var ulList = document.createElement('ul');
        parentElement.appendChild(ulList);
        for (var i = 0; i < this.workingHours.length; i++) {
            var liList = document.createElement('li');
            ulList.appendChild(liList);
            liList.textContent = this.workingHours[i] + this.getAmountOfCookeis(this.minCustPerH, this.maxCusPerH) + ' cookies.';
            total = total + this.getAmountOfCookeis(this.minCustPerH, this.maxCusPerH);
        }
       liList.textContent = ("Total = " + total)
    }
}
var tokyo = {
    name: 'Tokyo',
    minCustPerH: 3,
    maxCusPerH: 24,
    avgCookeisPerCustomer: 1.2,
    custPerHour: 0,
    amountOfCookeis: 0,
    workingHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ',
        '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],

    getAmountOfCookeis: function (min, max) {
        this.amountOfCookeis = Math.floor(generateCustomerPerHour(min, max) * this.avgCookeisPerCustomer);
        return this.amountOfCookeis;
    },
    printFun: function () {
        var total = 0;
        var parentElement = document.getElementById("mainid");
        var articleOne = document.createElement('article');
        var headingTwo = document.createElement('h2');
        parentElement.appendChild(headingTwo);
        parentElement.appendChild(articleOne);
        headingTwo.textContent = this.name;
        var ulList = document.createElement('ul');
        parentElement.appendChild(ulList);
        for (var i = 0; i < this.workingHours.length; i++) {
            var liList = document.createElement('li');
            ulList.appendChild(liList);
            liList.textContent = this.workingHours[i] + this.getAmountOfCookeis(this.minCustPerH, this.maxCusPerH) + ' cookies.';
            total = total + this.getAmountOfCookeis(this.minCustPerH, this.maxCusPerH);
        }
        liList.textContent = ("Total = " + total)
    }
}
var dubai = {
    name: 'Dubai',
    minCustPerH: 11,
    maxCusPerH: 38,
    avgCookeisPerCustomer: 3.7,
    custPerHour: 0,
    amountOfCookeis: 0,
    workingHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ',
        '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],

    getAmountOfCookeis: function (min, max) {
        this.amountOfCookeis = Math.floor(generateCustomerPerHour(min, max) * this.avgCookeisPerCustomer);
        return this.amountOfCookeis;
    },
    printFun: function () {
        var total = 0;
        var parentElement = document.getElementById("mainid");
        var articleOne = document.createElement('article');
        var headingTwo = document.createElement('h2');
        parentElement.appendChild(headingTwo);
        parentElement.appendChild(articleOne);
        headingTwo.textContent = this.name;
        var ulList = document.createElement('ul');
        parentElement.appendChild(ulList);
        for (var i = 0; i < this.workingHours.length; i++) {
            var liList = document.createElement('li');
            ulList.appendChild(liList);
            liList.textContent = this.workingHours[i] + this.getAmountOfCookeis(this.minCustPerH, this.maxCusPerH) + ' cookies.';
            total = total + this.getAmountOfCookeis(this.minCustPerH, this.maxCusPerH);
        }
        liList.textContent = ("Total = " + total)
    }
}
var paris = {
    name: 'Paris',
    minCustPerH: 20,
    maxCusPerH: 38,
    avgCookeisPerCustomer: 2.3,
    custPerHour: 0,
    amountOfCookeis: 0,
    workingHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ',
        '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],

    getAmountOfCookeis: function (min, max) {
        this.amountOfCookeis = Math.floor(generateCustomerPerHour(min, max) * this.avgCookeisPerCustomer);
        return this.amountOfCookeis;
    },
    printFun: function () {
        var total = 0;
        var parentElement = document.getElementById("mainid");
        var articleOne = document.createElement('article');
        var headingTwo = document.createElement('h2');
        parentElement.appendChild(headingTwo);
        parentElement.appendChild(articleOne);
        headingTwo.textContent = this.name;
        var ulList = document.createElement('ul');
        parentElement.appendChild(ulList);
        for (var i = 0; i < this.workingHours.length; i++) {
            var liList = document.createElement('li');
            ulList.appendChild(liList);
            liList.textContent = this.workingHours[i] + this.getAmountOfCookeis(this.minCustPerH, this.maxCusPerH) + ' cookies.';
            total = total + this.getAmountOfCookeis(this.minCustPerH, this.maxCusPerH);
        }
        liList.textContent = ("Total = " + total)
    }
}
var lima = {
    name: 'Lima',
    minCustPerH: 2,
    maxCusPerH: 16,
    avgCookeisPerCustomer: 4.6,
    custPerHour: 0,
    amountOfCookeis: 0,
    workingHours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ',
        '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],

    getAmountOfCookeis: function (min, max) {
        this.amountOfCookeis = Math.floor(generateCustomerPerHour(min, max) * this.avgCookeisPerCustomer);
        return this.amountOfCookeis;
    },
    printFun: function () {
        var total = 0;
        var parentElement = document.getElementById("mainid");
        var articleOne = document.createElement('article');
        var headingTwo = document.createElement('h2');
        parentElement.appendChild(headingTwo);
        parentElement.appendChild(articleOne);
        headingTwo.textContent = this.name;
        var ulList = document.createElement('ul');
        parentElement.appendChild(ulList);
        for (var i = 0; i < this.workingHours.length; i++) {
            var liList = document.createElement('li');
            ulList.appendChild(liList);
            liList.textContent = this.workingHours[i] + this.getAmountOfCookeis(this.minCustPerH, this.maxCusPerH) + ' cookies.';
            total = total + this.getAmountOfCookeis(this.minCustPerH, this.maxCusPerH);
        }
        liList.textContent = ("Total = " + total)
    }
}


function generateCustomerPerHour(min, max) {
    var generatedNumber = Math.floor(Math.random() * (max - min + 1) + min);
    //document.write(generatedNumber);
    return generatedNumber

}

seattle.printFun();
tokyo.printFun();
dubai.printFun();
paris.printFun();
lima.printFun();
