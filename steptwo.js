//Step 2 - Function 1
//Runtime:O(n^2)
//Spacetime:O(n)
const addToZero = (arr) =>{
    for(i = 0; i < arr.length; i++){
        for(n = 0; n < arr.length; n++){
            if(arr[i] + arr[n] === 0){
                return true
            }
        }
    } return false
}

//console.log(addToZero([1, 2, 3, -2]))

//Step 2 - Function 2
//Runtime:O(n)
//Spacetime:O(n)
const onlyUniqueChars = (str) => {
    for(i = 0; i < str.length - 1; i++){
        if(str.includes(str[i], i + 1)) {return false}
        }
    return true
}

//console.log(onlyUniqueChars("Moonday"))

//Step 2 - Function 3
//Runtime:O(n)
//Spacetime:O(n)
const isPangram = (str) => {
   let alphabet = "abcdefghijklmnopqrstuvwxyz"
   let regex = /\s/g
   let lowercase = str.toLowerCase().replace(regex, "")
  
   for(let i = 0; i < alphabet.length; i++){
    if(lowercase.indexOf(alphabet[i]) === -1){
      return false;
        }
   }
  return true;
} 
//console.log(isPangram("I like cats, but not mice"))

//Step 2 - Function 4
//Runtime:O(n)
//Spacetime:O(n)
const findLongestWord = (arr) =>{
    let longest = ''
   for(i = 0; i < arr.length; i++){
       if(arr[i].length > longest.length){
           longest = arr[i]
       }
   } 
   return longest.length
}
//console.log(findLongestWord(["hi", "hello"]))
