// sort 
function sortLargeFirst(numbers) {
    for (let j=0; j<numbers.length -1; j++) {
    
        let max = numbers[j];
        let max_location = j;

        for (let i=j; i<numbers.length; i++) {
            if (numbers[i] > max) { 
                max = numbers[i];
                max_location = i;
            }
        }// find max and location at here

        //swap old max and current max
        numbers[max_location] = numbers[j]; //put old max into current max location
        numbers[j] = max;  // change old max to current max
    }
    return numbers 
    
}

console.log(sortLargeFirst([5,7,3,1,8,12]));