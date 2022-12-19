//이번에는 map 객체로 만들어보자.
const clothes = [
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
];
function solution(clothes) {
    let map = new Map();
    for (let item of clothes) {
        if (map.has(item[1])) {
            map.set(item[1], map.get(item[1]) + 1);
        } else {
            map.set(item[1], 2);
        }
    }
    let answer = 1;
    for (let i of map) {
        answer *= i[1];
    }
    return answer - 1;
}
console.log(solution(clothes));
// const reversed = clothes.map(([key, value]) => [value, key]);
// // console.log(Object.fromEntries(reversed));
// const obj = new Object();
// console.log(Object.values(obj).push(2));
// // Object.values(obj) = for(items in reversed){
// //     items[1]
// // }

// console.log(obj);
