// score 배열에서 0-n번째 어레이를 추출하기
// 거기서 k개의 가장 큰 수들을 어레이화
// 거기서 가장 작은 수를 새로운 배열에 매번 append.
// 그 배열을 반환

function solution(k, score) {
    const answer = [];
    for (let i = 1; i <= score.length; i++) {
        const highestK = score
            .slice(0, i)
            .sort((a, b) => b - a)
            .slice(0, k);
        answer.push(Math.min(...highestK));
    }
    return answer;
}

const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

console.log(solution(4, score));
