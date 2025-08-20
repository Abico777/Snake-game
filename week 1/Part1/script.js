function canNest (arr1, arr2){
    if (!(Array.isArray(arr1) && Array.isArray(arr2))){
        return "Both value need to be array"
    }
    let arr1sorted = arr1.sort((x, y) => x-y); 
    let arr2sorted = arr2.sort((x, y) => x-y); 

    let arr1min = arr1sorted[0];
    let arr2min = arr2sorted[0];

    let arr1max = arr1sorted[arr1sorted.length-1];
    let arr2max = arr2sorted[arr2sorted.length-1];

    if ((arr1min > arr2min) && (arr2max > arr1max)) {
        return true;
    } else {
        return false;
    }
}

console.log(canNest([1, 2,3], [1, 5,]))
function canNest (arr1, arr2){
    if (!(Array.isArray(arr1) && Array.isArray(arr2))){
        return "Both value need to be array"
    }

    let arr1min = Math.min(...arr1);
    let arr2min = Math.min(...arr2);

    let arr1max = Math.max(...arr1);
    let arr2max = Math.max(...arr2);

    if ((arr1min > arr2min) && (arr2max > arr1max)) {
        return true;
    } else {
        return false;
    }
}

console.log(canNest([10, 24,35,6], [2, 52,]))