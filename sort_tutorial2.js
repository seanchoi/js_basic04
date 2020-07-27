// sort 
function findMax (numbers, index) {
    let maxNum = numbers[index];
    let max_location = index;

    for (let i=index; i<numbers.length; i++) {
        if (numbers[i] > maxNum) { 
            maxNum = numbers[i];
            max_location = i;
        }
    }
    return {max_number: maxNum, max_index: max_location}
}


function sortLargeFirst(numbers) {
    for (let j=0; j<numbers.length -1; j++) {
            
        // find max number and location using outside function
        let max = findMax(numbers, j); 
        newMax = max['max_number'];
        max_location = max['max_index'];

        //swap old max and current max
        numbers[max_location] = numbers[j]; //put old max into current max location
        numbers[j] = newMax;  // change old max to current max
    }
    return numbers 
    
}

console.log(sortLargeFirst([5,7,3,1,8,12]));