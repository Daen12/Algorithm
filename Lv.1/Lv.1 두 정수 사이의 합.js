function solution(a, b) {
    let i = a;
    let answer = 0;
    if (a - b <= 0) {
        while (i <= b) {
            answer += i;
            i++;
        }
    }
    if (a - b > 0) {
        while (b <= i) {
            answer += i;
            i--;
        }
    }
    return answer;
}

// 다른 풀이

function solution2(a, b) {
    let answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i;
    }
    return answer;
}
console.log(solution2(3, 3));
