//Solution#1
const removeDup = (str) => {
  let set = new Set;
  let words = str.split(" ");
  for(i of words){
    set.add(i)
  }
  return [...set].join(" ")
}

//Solution#2
const removeDup = (str) => {
  let hash = {}
  let arr = []
 
  let words = str.split(" ");
  for( let  i = 0; i < words.length; i++ ){
    if(hash[words[i]]){
      hash[words[i]]++
    } else {
      hash[words[i]] =  1
    }
  }

  for(let j in hash){
    if(hash[j] >= 1){
      arr.push(j)
    }
  }

  return arr.join(" ")
}

console.log(removeDup("This is is a test test string"))