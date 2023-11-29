export function cutArray(inputArray){
    let i;
    let outputArray = []
    for(i = 0; i < 4; i++){
        outputArray[i] = inputArray.slice(i * 4, (i * 4) + 4);
    }
    return outputArray;
}
