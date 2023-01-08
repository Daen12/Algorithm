//(각 카테고리 안 의상 수 +1) 끼리 곱한 후, 전체 결과에서 -1을 해준다.
//각 카테고리에서 1을 더하는 이유는 그 카테고리의 의상을 '안입는 경우'도 포함하기 때문이고
// 마지막에 전체에서 1을 빼는 경우는 '모두 안입는 경우'를 방지하기 위함이다.

const clothes = [
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
];
function solution(clothes) {
    //set에 카테고리를 중복되지 않도록 넣어줌.
    const set = new Set();
    clothes.forEach((i) => set.add(i[1]));
    const setArray = [...set];
    //배열 안 카테고리 별 옷의 개수가 들어간 arr을 생성함
    const arr = new Array(setArray.length).fill(0);
    for (let i = 0; i < setArray.length; i++) {
        arr[i] = clothes.filter((item) => item[1] === setArray[i]).length;
    }
    const answer = arr.map((i) => i + 1).reduce((a, b) => a * b, 1) - 1;
    return answer;
}
console.log(solution(clothes));


