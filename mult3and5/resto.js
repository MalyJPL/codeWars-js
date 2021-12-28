function solution(number){
    let sum=0;
    let resto3, resto5;
    for(let i=0; i<number; i++){
     resto3 = number%5;
     resto5 = number%3;
      if(resto3==0 || resto5==0){
        sum += i;
              }  
    }

    return sum
  }

 let sum = solution(10);
 console.log(sum);