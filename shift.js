const shift = (inputArray,direction,numberOfStep) => {
    try{
        if(!(inputArray && Array.isArray(inputArray) && inputArray.length > 0)) { throw error };
        if(direction !== 'left' && direction !== 'right') { throw error };
        if(typeof numberOfStep !== 'number' || numberOfStep < 0) {throw error};
        let sliceArray = [];
        switch(direction){
            case 'left':
                sliceArray = inputArray.splice(0,(numberOfStep%inputArray.length));
                return [...inputArray,...sliceArray];
            case 'right':
                sliceArray = inputArray.splice(inputArray.length - (numberOfStep%inputArray.length));
                return [...sliceArray,...inputArray];
            default : {
                return inputArray;
            }
        }
        
    }catch(error){
        return 'Error!';
    }
}

console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));