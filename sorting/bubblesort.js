let bubbleSort = arr => {
    let len = arr.length;
    let swapped;

    do{
        swapped = false;
        for(var i=0; i<len; i++){
            if(arr[i]>arr[i+1]){
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }
    while(swapped)
    return arr;
}
console.log(bubbleSort([1,34,5,89,10,0]));