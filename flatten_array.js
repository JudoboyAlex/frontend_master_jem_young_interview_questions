const flatten = (arr) => {
  let finalArr = arr.reduce((acc, item) => {
    if(Array.isArray(item)){
      acc = acc.concat(flatten(item));

    } else {
      acc.push(item);
    }
    return acc;
  }, [])
    return finalArr;
}

console.log(flatten([1,2,[3,4,[5,6,7],8],9,10]))