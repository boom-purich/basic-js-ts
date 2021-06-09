const secondMax = (inputArray) => {
    try{
        if(inputArray && Array.isArray(inputArray) && inputArray.length > 0) {
            if(!inputArray.every(value => typeof value === 'number')) {throw error}
            
            //Remove Duplicate
            inputArray = inputArray.filter((value,index,selfArray) => selfArray.indexOf(value) === index);

            //Sort Number : DESC
            inputArray.sort((a,b) => b-a);

            return inputArray.length > 1 ? inputArray[1] : inputArray[0];
        }else{
            throw error;
        }
    }catch(error) {
        return 'Error!';
    }
    
}

console.log(secondMax([2, 3, 4, 5]));