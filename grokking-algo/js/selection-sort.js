"use strict"

const getSmallestNumber = nums => {
    let smallestNumber = nums[0]
    let smallestNumberIndex = 0

   for(let x=0; x < nums.length; x++){
        if(nums[x] < smallestNumber){
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
        if(nums[x] > greatestNumber){
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

    for(let x=nums.length; x > 0 ; x--){
        let index = sortOrder(nums)

        sortedNums.push(nums[index])
        nums.splice(index, 1)
    }
    return sortedNums
}

sortNumbers([2,4,1,5])