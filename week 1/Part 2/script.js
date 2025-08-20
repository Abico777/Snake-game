//     let sum = 0;
//     for (let i = 0; i < a.length; i++){
//         let num = a[i];
//         if (num == 2) {
//             sum += num;
//         }
//         let isPrime = true;
//         if (num > 2) {
//             for (j = 2; j < num/2 +1; j++) {
//                 if (num % j == 0) {
//                     isPrime = false;
//                 }
//             }
//             if (isPrime) {
//                 sum += num;
//             }
//         }
//     }
//     if (a[0] == sum) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isMagicArray([21,3,6,7,11,9]))
// console.log(isMagicArray([10,5,5]))
// console.log(isMagicArray([2]))
// console.log(isMagicArray([20,3,6,7,11,9]))


// function arraySort (num) {
//     let checker = true;
//     while (checker) {
//         checker = false;
//         for (i = 0; i < num.length-1; i++) {
//             if (num[i] > num[i + 1]){
//                 checker = true;
//                 let temp = num[i];
//                 num[i] = num[i + 1];
//                 num[i + 1] = temp;
//             }
//         }
//     }
//     return num;
// }
// console.log(arraySort([3,4,2]))
// console.log(arraySort([33,1,5,67,46,4,2]))
// console.log(arraySort([3,4,2]))
// console.log(arraySort([3,4,2]))

// 