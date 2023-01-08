//10*10의 맵 그래프에서 (5,5)에 위치하는 것과 같음.
//0-10을 벗어나면 좌표 그대로.
//같은 인덱스가 있는지 보고,,
//만약 있다면, 그 다음 인덱스가 이전과 같은 인덱스인지 확인.
//맞다면 중복길이므로 이를 1 차감.
const dirs = "LULLLLLLU";

function solution(dirs) {
    let X = 5;
    let Y = 5;
    const path = new Set();

    const reference = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0],
    };

    for (let i = 0; i < dirs.length; i++) {
        const direction = dirs[i];
        let newX = X + reference[direction][0];
        let newY = Y + reference[direction][1];

        if (newX > 10 || newY > 10 || newX < 0 || newY < 0) {
            // newX = newX - reference[direction][0];
            // newY = newY - reference[direction][1];
            continue;
        } else {
            path.add("" + X + Y + newX + newY);
            path.add("" + newX + newY + X + Y);
            X = newX;
            Y = newY;
        }
    }

    return path.size / 2;

    //만약 path에 push할 인덱스가 이미 존재한다면
    //그 전 인덱스의 값이 맨끝 인덱스 값과 같은지 확인한 후
    //같으면 count 더하지말기 (push는 하기)
    //다르면 count++

    //만약 x,y가 10을 벗어나면 xy는 기존 값과 동일하게 유지. count도 하지 말기. push도 하지말기
}
console.log(solution(dirs));
