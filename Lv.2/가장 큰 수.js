//주어진 배열의 정수들의 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 리턴하기.

//배열을 돌면서 원소의 '첫번째' 자리가 가장 큰 순서대로 정렬
//첫번째가 같으면 두번째가 큰 순서대로 정렬
//두번째가 같으면 세번째가 큰 순서대로 정렬
//이때 둘중 하나가 undefined이면, 둘을 합쳐서 뭐가 더 큰지 테스트해보기.

//*** 유의할 점 : sort()는 원배열이 정렬되는것으로, 복사본이 만들어지는 것이 아님. */
//comparefunction에서 숫자가 유니코드 문자열로 변환되기 때문에 80이 9 앞에 온다.
//comparefunction(a,b)에서 0보다 작은 경우 a가 먼저 온다. 반대이면, b가 먼저.
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

const array = [6, 30, 300, 330];
function solution(array) {
    const firstSort = array.sort().reverse();
    const stringify = firstSort.map((i) => i.toString()); //['3', '30', '34', '5', '9']
    stringify.forEach((item, index) => {
        if (index === stringify.length - 1) {
            return;
        }
        if (
            item.length > stringify[index + 1].length &&
            CountZeros(item) >= CountZeros(stringify[index + 1])
        ) {
            [stringify[index], stringify[index + 1]] = [
                stringify[index + 1],
                stringify[index],
            ];
        }
    });
    return stringify.join("");
}
console.log(solution(array));

//앞의 숫자가 자릿수가 크면서 뒤에서부터 카운트 한 0의 숫자가 같거나 크면 = 뒤로 이동


////===== Version 2 ====////

function solution(numbers) {
    const answer = numbers 
        .map((i) => i.toString())
        .sort((a, b) => {
            return Number(a + b) - Number(b + a);
        })
        .reverse()
        .join("");
    return answer[0] === "0"?  "0" : answer;
}

const numbers = [1, 2, 3];
console.log(solution(numbers));