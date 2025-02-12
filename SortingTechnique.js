// bubble sort using recursion 
function bubbleSort(arr, n) {
    // required the base case
    if(n === 1) return;
    
    var count = 0;
    for(let i = 0; i < n-1; i++) {
        if(arr[i] > arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            count++;
        }
    }
    
    // check if any recursion not happen or not
    // if not then return the callback
    if(count === 0) return;
    
    // largest element is fixed, recur for element array 
    bubbleSort(arr, n-1);
}
