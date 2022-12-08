let array = [11, 14, 17, 19];
          //[11, 12, 13, 14, 15, 16, 17, 18, 19]
let index = 0;
let count = 0;
let number = 0

console.log(`index     number`);
for (let i = 0; i < array.length - 1; i++) {
    count = array[i+1] - array[i];
    number = array[i];
    for (let j = 1; j < count; j++) {
        ++index;
        ++number;
        console.log(`  ${index}        ${number}`)
    }
    ++index;
}

