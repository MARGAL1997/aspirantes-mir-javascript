// escribe la función maxIndex acá

function maxIndex(array) {

    if (array.length === 0) return -1;

    let mayind = 0;
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (mayor < array[i]) {
            mayor = array[i]
            mayind = i;
        }
    }

    return mayind;
}



console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
