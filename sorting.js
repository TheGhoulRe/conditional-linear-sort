function sort(array=[]) {
  let allValues = {};
  let maxValue = 0;
  let minValue = 1000000;
  let arrayLength = array.length;
  let result = [];

  for (let i = 0; i < arrayLength; i += 1) {
    let val = array[i];
	if (allValues[val] === undefined) {
	  allValues[val] = 1;
	} else {
      allValues[val]++;
	}
    maxValue = val > maxValue ? val : maxValue;
	minValue = val < minValue ? val : minValue;
  }
  
  for (let i = minValue; i < maxValue; i++) {
	let val = allValues[i];
    if ( val !== undefined )
	  for ( let j = 0; j < val; j++ )
		result.push(i);
  }

  return result;
}


console.log(sort([10, 2, 4, 12, 11, 5, 2]));
