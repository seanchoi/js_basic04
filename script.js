function addNumbers (a, b)  {
    return a + b;
}
console.log(addNumbers(4, 5));
console.log(addNumbers(3, 7));


function turnMinuteToSeconds (min) {
    return min*60;
}
console.log(turnMinuteToSeconds(4));


function firstItem () {
    let item = [1,2,3,4,5,6];
    let items2 = ["sean", "yoori", "somebody"];
    return item[0], items2[2];
}
console.log(firstItem());


// check if string is empty
function isEmptyString(some_string) {
    if (some_string == ""){
        return true
    }
    else {
        return false
    }
}
console.log(isEmptyString(""));
console.log(isEmptyString("sean"));


//find min and max
let numbers = [5,7,3,5,2,1];

function findMin(numbers) {
    let min = numbers[0];
    for (var i=1; i<numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        
    }
    console.log(min);
}

findMin(numbers);

function findMax(numbers) {
    let max = numbers[0];
    for (var i=1; i<numbers.length; i++) {
        if (numbers[i]> max) { 
            max = numbers[i];
        }
    }
    console.log(max);
}

findMax(numbers);


// randomNumber 1 to 100

function randomNumber() {
    var random = Math.floor(Math.random()*100)+1
    console.log(random);
}
randomNumber();

// break, continue
for (i=0; i < 100; i++) {
    if (i == 6) {
        continue; // skip
    }
    else if( i == 15) {
        break;  // stop
    }
    console.log(i);
    document.write(i + "<br/>");
}
