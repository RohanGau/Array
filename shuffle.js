const arr = [1, 2, 3, 4];

function shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i+1));
        const storedItem = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = storedItem;
    }
    return arr;
}

console.log("shuffle array :", shuffle(arr));
