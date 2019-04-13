class Clock {
    constructor() {
        this.date = new Date()
        this.currentHours = this.date.getHours(); 
        this.currentMinutes = this.date.getMinutes(); 
        this.currentSeconds = this.date.getSeconds(); 
        this.printTime()
        this._tick = this._tick.bind(this)
        setInterval(this._tick, 1000);
    }

    printTime() {
        let currentTimeString = this.currentHours + ":" + this.currentMinutes + ":" + this.currentSeconds; 
        console.log(currentTimeString);
    }

    _tick() {
        // 1. Increment the time by one second.
        this.currentSeconds += 1;
        // 2. Call printTime.
        this.printTime.call(this);
    }
}

// const clock = new Clock();

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// addNumbers(0, 2, callback);

const addNumbers = function(sum , numsLeft, completionCallback) {
     if (numsLeft === 0) {
        completionCallback(sum);
     } else {
     reader.question("Enter a number: ", (number) => {
        intNumber = parseInt(number) 
        sum += intNumber;
        console.log(sum);
        addNumbers(sum, numsLeft - 1, completionCallback)
     })
    }
}

const callback = function(sum){
    console.log(`The sum is: ${sum}`);
    reader.close;
}






// const absurdBubbleSort = functoin(arr, callback) {



// };


const askIfGreaterThan = function(el1, el2, callback) {
    reader.question(`Do you want ${el1} swapped with ${el2}?`, (answer) => {
        if (answer = "yes") {
            callback(true)
        }
        else {
            callback(false)
        }
    })
}

const sort = function(condition) {
    if (!condition) {
        sorted = false;
        console.log("does this work"); 
    };
}


askIfGreaterThan(1, 2, sort)
