"use strict"

let 

const getSmallestNumber = nums => {
    let smallestNumber = nums[0]
    let smallestNumberIndex = 0

   for(let x=0; x < nums.length; x++){
        if(nums[x] < 0){
            smallestNumber = nums[x]
            smallestNumberIndex = x
        }
   }
  return smallestNumberIndex
}


const getGreatestNumber = nums =>{
    let greatestNumber = nums[0]
    let greatestNumberIndex = 0

   for(let x=0; x < nums.length; x++){
        if(nums[x] < 0){
            greatestNumber = nums[x]
            greatestNumberIndex = x
        }
   }
  return greatestNumberIndex

}

const sortNumbers = (nums, order ='asc') => {

    const sortedNums = []
    const sortOrder = order === 'asc'
    ? getSmallestNumber 
    : getGreatestNumber

    for(let x=0; x < nums.length; x++){
        let index = sortOrder(nums)
        sortNumbers.push(nums[index])
        array.splice(index, 1)
    }
    return sortedNums
}