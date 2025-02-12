function removeFalsyValues(arr){
  const answer = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]){
      answer[answer.length] = arr[i];
    }
  }
  return answer;
}

console.log(removeFalsyValues([0, 5, 3, 4, false, "", 8, 9]))