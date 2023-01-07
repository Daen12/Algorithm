function solution(price, money, count) {
    //놀이기구를 n번째 이용한다면, 원래 이용료의 n배를 받기로 했음.
    //money - (1+2+..+count)*price
    //만약 위 값이 0보다 작으면 절댓값을 리턴, 0보다 크거나 같으면 0을 리턴.

    const value = money - (((1 + count) * count) / 2) * price;
    const answer = value >= 0 ? 0 : Math.abs(value);
    return answer;
}
console.log(solution(3, 20, 4));
