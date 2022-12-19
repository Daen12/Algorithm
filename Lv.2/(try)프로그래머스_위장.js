//배열 안의 두번째 인자가 종류이다. 종류별로 다른 옷이 몇개인지를 파악하여 그룹핑한다.
//같은 카테고리에서 중복하여 입을 수 없으므로 스파이가 입을 수 있는 옷의 최대 개수 <= 카테고리 수 이다.
//종류 category 별로 배열을 만들어 푸시한다? [1,2,3], [A,B], [a,b,c] => 이렇게 하지말고 [카테고리, 안에 옷 수] 이렇게?
//[face, 2], [eye, 3], [headgear, 1]
//아니면 오브젝트로 하는게 더 편한가?
//그냥 배열 안에 각 카테고리 별 숫자가 들어가도록 하자.

//[a,b,c] 에서 만들 수 있는 모든 배열 만들기
// = 순열 구현.
//재귀를 사용하면 좋은 이유 : 계속해서 반복될 일에 대해서 한번만 명시해놓고, 들어가는 인자를 바꾸어주기만 하면 되기 때문이다.

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
    //재귀를 돌며 받아온 조합을 내부 배열끼리 곱한 후 더해서 계산.
    let masterCount = 0;
    for (let number = 1; number <= arr.length; number++) {
        // if (number === 1) {
        //     masterCount += array.reduce((a, b) => a + b);
        // } else {
        const add = getCombinations(arr, number)
            .map((i) => i.reduce((a, b) => a * b, 1))
            .reduce((a, b) => a + b, 0);

        masterCount += add;
    }
    return masterCount;
}

//배열의 순열조합을 리턴해주는 함수.
function getCombinations(arr, number) {
    const results = [];
    if (number === 1) {
        return arr.map((i) => [i]);
    }
    arr.forEach(function (elem, index, array) {
        const rest = array.slice(index + 1);
        const combinations = getCombinations(rest, number - 1);
        const attached = combinations.map((i) => [elem, ...i]);
        results.push(...attached);
    });
    return results;
}

console.log(solution(clothes));
