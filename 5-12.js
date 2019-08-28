// function URLify(string){

//     let newString = string.replace(/ /gi, '%20')

//     return newString
// }

// console.log(URLify('tauhida parveen'))
// console.log(URLify('www.thinkful.com /tauh ida parv een'))


// function filter(arr){

//     let filtered = []

//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] < 5){
//             filtered.push(arr[i])
//         }
//     }

//     return filtered

// }

// console.log(filter([1, 2, 3, 5, 6, 7, 8]))


// function findMax(arr){

//     let max = 0;

//     let current = 0;

//     for(let i = 0; i < arr.length; i++){

//         current = current + arr[i]

//         if(current > max){
//             max = current
//         }
//     }

//     return max

// }

// console.log(findMax([4, 6, -3, 5, -2, 1]))


function mergeArrays(arr1, arr2){

    let merged = arr1.concat(arr2).sort(function(a, b){return a-b});

    return merged;

    // let greater = 0;

    // for (let i = 0; i < merged.length; i++){

    //     console.log('i',merged[i])

    //     for(let j = 0; j < merged.length; j++){

    //         console.log('j', merged[j])

    //         if (merged[i] < merged[j+1]){

    //             // greater = merged[i]
    //             // merged[i] = merged[j+1]
    //             // merged[j+1] = greater;

    //             greater = merged[j+1]
    //             merged[j+1] = merged[i]
    //             merged[i] = greater;
    //         }
    //     }
    // }

    // return merged;

}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))