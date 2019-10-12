module.exports =  function multiply(first, second) {
  let firstArray  = [];
  let secondArray = [];
  if(first.length >= second.length){
    firstArray = first.split('').reverse();
    secondArray = second.split('').reverse();
  }else{
    firstArray = second.split('').reverse();
    secondArray = first.split('').reverse();
  }
 
  const tempArr = [[]];
  let brain = 0;

  secondArray.forEach((second, indx) => {
    const tempArrRow = [];
    firstArray.forEach(first => {
      let number;
      const tempRes = +second * +first;
      const tempBrain = tempRes + brain;
      if(tempBrain >= 10){
        number = +tempBrain.toString().charAt(1);
        brain  = +tempBrain.toString().charAt(0);
      }else{
        number = tempBrain;
        brain = 0;
      } 
      tempArrRow.push(number); 
    });
    if(brain !== 0) tempArrRow.push(brain);

    tempArr[indx] = tempArrRow;
    brain = 0;
  });

  let k = 1;
  let numb = 0;
  const res = [...tempArr[0]];

  for(let i = 1; i < tempArr.length; i++){
    k = i;
    brain = 0;
    for(let j = 0; j < tempArr[i].length; j++){
      const resItem = (k >= res.length) ? 0 : res[k];
      const testNumb = resItem + tempArr[i][j] + brain;

      if(testNumb >= 10){
        numb = +testNumb.toString().charAt(1);
        brain  = +testNumb.toString().charAt(0);
      }else{
        numb = testNumb;
        brain = 0;
      }
      res[k] = numb;
      k++;
    };
    if(brain !== 0)res.push(brain);
  }
  return res.reverse().join('');
}