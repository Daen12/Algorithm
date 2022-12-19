// const string = "1200";
const string = "230110";
const item = "12000";
const nextitem = "1210";

// function CountZeros(item) {
//     let count = 0;
//     for (let i = item.length - 1; item[i] === "0"; i--) {
//         if (item[i] === "0") {
//             count++;
//         }
//         if (item[i + 1] !== "0") {
//             break;
//         }
//     }
//     return count;
// }
// console.log(CountZeros(item));
// console.log(CountZeros(nextitem));

function CountZeros(item) {
    let count = 0;
    for (let i = item.length - 1; i > 0; i--) {
        if (item[i] === "0") {
            count++;
        }
        if (item[i - 1] !== "0") {
            break;
        }
    }
    return count;
}
console.log(CountZeros(item));
console.log(CountZeros(nextitem));
// 첫번째가 0이면 => 그 다음 0이면 ...
