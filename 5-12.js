// function URLify(string){

//     let newString = string.replace(/ /gi, '%20')

//     return newString
// }

// console.log(URLify('tauhida parveen'))
// console.log(URLify('www.thinkful.com /tauh ida parv een'))


// function filter(arr){

//     let filtered = []

//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] >= 5){
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


// function mergeArrays(arr1, arr2){

//     let merged = arr1.concat(arr2).sort(function(a, b){return a-b});

//     return merged;

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

// }

// console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))



// function removeChar(string, char){

//     // let newString = ''

//     for(let i = 0; i < string.length; i++){
//         console.log('i', string[i])

//         for(let j = 0; j < char.length; j++){

//             console.log('j', char[j])
            
//             if(string[i] === char[j]){
//                 string = string.slice(0, i) + '' + string.slice(i + 1)
//             }
//         }
//     }

//     return string;

//     // for (let i = 0; i < char.length; i++){

//     //     if(string.includes(char[i])){
//     //         console.log(char[i])
//     //         newString = string.replace(char[i], '')
//     //     }
//     // }

//     // return newString

// }

// console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))



// function products(arr){

//     let products = []

//     for(let i = 0; i < arr.length; i++){

//         let product = 1 

//         for(let j = 0; j < arr.length; j++){
            
//             if(j !== i){
//                 product *= arr[j]
//             }
//         }

//         products.push(product)
//     }

//     return products;

// }

// console.log(products([1, 3, 9, 4]))




// function stringRotation(str1, str2){

//     if(str1.length !== str2.length){
//         return false;
//     }

//     let str1Repeat = str1.repeat(5)
//     console.log(str1Repeat)

//     if(str1Repeat.includes(str2)){
//         return true
//     }

//     else{
//         return false;
//     }



// }

// console.log(stringRotation("amazon", "azonma"))

// console.log(stringRotation("amazon", "azonam"))


function twoDArray(arr){

    for(let i = 0; i < arr.length; i++){

        // console.log(arr[i])


        for(let j = 0; j < arr[i].length; j++){

            // console.log(arr[i][j])


            if(arr[i][j] = 0){
                
                arr[i].forEach(element => {
                    element = 0;
                });
            }

        }

    }

    return arr;

}


let input = 
[

[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]

];

console.log(twoDArray(input))


