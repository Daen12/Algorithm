//=== Version 1===//

// function solution(arr){
//     const answer = [arr[0]];
//     for (let i=1; i<arr.length; i++){
//         if(arr[i] !== arr[i-1]) answer.push(arr[i]);
//     }
//     return answer;
// }

//=== Version 2===//
function solution(arr) {
  arr.filter((x, index) => x !== arr[index + 1]); //중복되는 원소의 뒷 숫자를 가져오는 로직.
  //마지막 원소를 비교할 때는, 마지막 차례 인덱스보다 큰 원소가 없어서 'undefined'가 뜨기 때문에, 이 undefined와 값을 비교하게 된다. 따라서 마지막 값은 무조건 들어가게 되는 원리.
}

const arr = [1, 1, 3, 3, 0, 1, 1];
console.log(solution(arr));

//=== Version 3==//
let solution = (_) => _.filter((i, $) => i != _[--$]); //underscore? and the dollar idenfitier?
// version2가 중복값의 뒷 순서를 가져왔다면 위 방법은 중복값의 앞순서를 가져오는 로직.
