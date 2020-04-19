// a function that takes in a parameter (a whole number/integer) and checks if numbers from 1 to the given parameter (inclusive) are divisible by 2,3,5 while replacing with the appropriate words.
function whole(number){
    if(typeof number === 'number'){
        // creates an array
        let arr=[];
            for(let i = 1; i<=number; i++){
                    if (i%2 === 0 && i%3 === 0 && i%5 === 0){
                        arr.push('yu-gi-oh');
                    } else if(i%2 === 0 && i%3 === 0){
                        arr.push('yu-gi');
                    } else if(i%2 === 0 && i%5 === 0){
                        arr.push('yu-oh');
                    } else if(i%3 === 0 && i%5 === 0){
                        arr.push('gi-oh');
                    } else if (i%2 === 0){
                        arr.push('yu');
                    } else if(i%3 === 0){
                        arr.push('gi');
                    } else if(i%5 === 0){
                        arr.push('oh');
                    } else {
                        arr.push(i);
                    }
            }
            // the array it returns
        return arr;
    }
    // the output if number is not valid
   return "Invalid input";
} 

// passes 100 in thr parameter
  console.log(whole(100));

//   passes a random number in the parameter
  console.log(whole(50));
  