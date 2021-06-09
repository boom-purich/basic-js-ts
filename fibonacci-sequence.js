const fib = (num) => {
  try {
    if (!num || typeof num !== "number" || num < 1) {
      throw error;
    }
    let initialFibonacci = [1, 1];
    let sumNumber = 1;
    Array.from([...new Array(num - 1)]).map((value, index) => {
      sumNumber = initialFibonacci.reduce((a, b) => a + b);
      initialFibonacci.splice(0, 1);
      initialFibonacci.push(sumNumber);
    });
    let result = Math.min(...initialFibonacci);
    return result;
  } catch (error) {
    return "Error!";
  }
};

console.log(fib(5));
