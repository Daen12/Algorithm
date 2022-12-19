// 매우 비동의 어피치형 3점
// 비동의	어피치형 2점
// 약간 비동의	어피치형 1점
// 모르겠음	어떤 성격 유형도 점수를 얻지 않습니다
// 약간 동의	네오형 1점
// 동의	네오형 2점
// 매우 동의	네오형 3점

// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
// 4번 지표	어피치형(A), 네오형(N)
// const flagObj = {
//     1: { R: 0, T: 0 },
//     2: { C: 0, F: 0 },
//     3: { J: 0, M: 0 },
//     4: { A: 0, N: 0 },
// };
// console.log(flagObj.R);

// const survey = ["AN", "CF", "MJ", "RT", "NA"];
const survey = ["TR", "RT", "TR"];
// const choices = [5, 3, 2, 7, 5];
const choices = [7, 1, 3];
const score = [3, 2, 1, 0, 1, 2, 3];
const obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
};
console.log(obj.R);
//["TR", "RT", "TR"]	[7, 1, 3]	"RCJA"

// 먼저 인풋 배열의 각 원소를 돌면서
// 점수가 1<= 점수 <= 3이면 C의 i번째 점수를 원소의 두번째[1]에 더한다.
// 점수가 4<= 점수 <= 5이면 C의 i번째 점수를 원소의 첫번째[0]에 더한다.

function solution(survey, choices) {
    let result = "";
    for (let i = 0; i < survey.length; i++) {
        let winner =
            1 <= choices[i] && choices[i] <= 3 ? survey[i][0] : survey[i][1];
        obj[winner] += score[choices[i] - 1];
    }
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    for (let i = 0; i < keys.length; i += 2) {
        if (values[i] === values[i + 1]) {
            const smallerCharCode =
                keys[i].charCodeAt() < keys[i + 1].charCodeAt()
                    ? keys[i]
                    : keys[i + 1];
            result = result.concat(smallerCharCode);
        } else {
            const bigger = values[i] < values[i + 1] ? keys[i + 1] : keys[i];
            result = result.concat(bigger);
        }
    }

    return result;
}
console.log(solution(survey, choices));

//** 자바스크립트는 조건문에서 < 양쪽끝에 range역할을 하는 숫자를 적을 수 없다!!!!! **//
