const fizzBuzz = (number) => {
    try{
        switch(true) {    
            case (typeof number !== 'number') :
                throw error;
            case (number % 3 === 0 && number % 5 === 0) :
                    return 'FizzBuzz';
            case number % 3 === 0 :
                return 'Fizz';
            case (number % 5 === 0) :
                return 'Buzz';
            default: {
                return '';
            }
        }
    }catch(error){
        return 'Error!';
    }
}

console.log(fizzBuzz(-1));