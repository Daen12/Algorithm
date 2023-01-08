// 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
// 예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

//**** 문제가 이해 안됨!!!!!! ****//
//logic
//1. answer 변수는 걸린 시간을 의미한다.
//2. 트럭 무게 배열을 빈 어레이에 최대길이(bride length) 만큼 불러온다. 이때 어레이의 합이 weight가 넘지 않도록 한다.
//3. 합이 넘으면 1초 기다리고 앞의 트럭을 shift 한다.
//4. 마지막 answer 값에 1을 더한다 (마지막 트럭이 다 지나가는 시간)

// function solution(bridge_length, weight, truck_weights) {
//     let answer = 0;
//     const bridge = [];
//     for (i=0; i<truck_weights.length+1; i++){ //i=0,1,2,3 돌아가며 불러온다.
//         if(bridge.length < bridge_length){
//             bridge.push(truck_weights[i]); //truck_weights.pop()
//             answer++;
//             if(bridge.reduce((a,b) => a+b, 0) > weight){
//                 bridge.shift();
//                 bridge.push(truck_weights[i+1]);
//                 answer++;
//             } else{
//                 bridge.push(truck_weights[i+1]);
//                 answer++;
//             }
//         } else{
//             bridge.shift();
//             answer++;
//         }
//     }

//     return answer+1;
// }

//========================= 다시.
//1. 빈 배열을 만든다.
//2. 하)배열에 숫자를 넣는다. answer++ 한다. (넣는 숫자가 배열의 마지막 숫자인가?) 예 -> return answer+bridge.length +1 아니오 -> 가)
//3. 가)bridge length가 찼는가? 아니라면 > 나)뒤의 숫자와 합했을때 weight보다 작은가? > 하) + 가) 함수
//                                                                        아니라면 > answer++, 다) 재귀돌리기
//                            맞다면 > 다) 배열.shift()/ 나)함수 재귀 돌리기

// function solution(bridge_length, weight, truck_weights) {
//     answer = 0;
//     array = [];

//     while(true){
//         if(truck_weights.length ===1){
//             return answer += bridge_length +1
//         } else{
//             array.push(truck_weights.shift());
//             answer++;
//             function loop(array){
//                 if(array.length >= bridge_length){
//                     array.shift();
//                 }
//                 if(array.reduce((a,b) => a+b, 0) + truck_weights[0] >= weight){
//                     answer++;
//                     return loop();
//                 } else{
//                 }
//             }
//             loop();

//         }
//     }
// };

// const bridge_length = 2;
// const weight = 10;
// const truck_weights = [7,4,5,6];

// console.log(solution(bridge_length, weight, truck_weights));

//================== 다른 케이스를 가정해보자. ====================//

// bridge length = 3; weight = 12; truck_weights = [3,6,4,2,6]
// [0,0,3] 다리길이-1번째 인덱스 = 첫 숫자. answer ++
// [0,3,6] 맨앞 shift. 두번째 숫자와 합이 <=12 이면 두번째 숫자 push / truck_weights 길이가 0인가? return answer+3;
// [3,6,0] 맨앞 shift. 세번째 숫자와 합이 <=12이면 세번째 숫자 push. 아니니까 0 푸시
// [6,0,4] 맨앞 shift. 세번째 숫자와의 합이 <=12니까 세번째 숫자 push.
// [0,4,2] 맨앞 shift. 네번째 숫자와의 합이 <=12니까 네번째 숫자 push.
// [4,2,6] 맨앞 shift. 다섯번째 숫자와의 합이 <=12니까 다섯번째 숫자 push. answer++//마지막 원소 enter => + 다리길이 = 답
// [2,6,0]
// [6,0,0]
// [0,0,0]

// function solution(bridge_length, weight, truck_weights){
//     count = 0;
//     const array = new Array(bridge_length).fill(0); //[0,0,0]
//     while(true){
//         array.shift();
//         if(array.reduce((a,b) => a+b, 0) + truck_weights[0] <= weight){
//             array.push(truck_weights.shift());
//             count++;
//             if(!truck_weights.length) return count+bridge_length;
//         } else{
//             array.push(0);
//             count++
//         }
//     }
// }

//============ 중복되는 count 변수를 바깥으로 빼기 =============//

// function solution(bridge_length, weight, truck_weights){
//     count = 0;
//     const array = new Array(bridge_length).fill(0); //[0,0,0]
//     while(true){
//         array.shift(); //O(n)
//         if(array.reduce((a,b) => a+b, 0) + truck_weights[0] <= weight){
//             array.push(truck_weights.shift()); //O(n)
//             if(!truck_weights.length) return count+bridge_length+1; //O(1)
//         } else{
//             array.push(0); //O(1)
//         }
//         count++; //O(1)
//     }
// }

// //========== 삼항 연산자 시도 ===========//
// function solution(bridge_length, weight, truck_weights) {
//   let count = 0;
//   const array = new Array(bridge_length).fill(0);

//   while (truck_weights.length) {
//     array.shift();
//     const nextEnter =
//       array.reduce((a, b) => a + b, 0) + truck_weights[0] <= weight
//         ? truck_weights.shift()
//         : 0;
//     array.push(nextEnter);
//     count++;
//   }
//   return count + bridge_length;
// }
// [0, 0, 0][(0, 0, 3)][(0, 3, 6)][(3, 6, 0)][(6, 0, 4)][(0, 4, 2)][(4, 2, 6)]; // count=6, 6+3 = 9
// const bridge_length = 3;
// const weight = 12;
// const truck_weights = [3, 6, 4, 2, 6];
// console.log(solution(bridge_length, weight, truck_weights));

// const bridge_length = 100;
// const weight = 100;
// const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
// console.log(solution(bridge_length, weight, truck_weights));

//========== 삼항 연산자 안쓰고 시도 ===========//
function solution(bridge_length, weight, truck_weights) {
    let count = 0;
    const array = new Array(bridge_length).fill(0);

    while (truck_weights.length) {
        array.shift();
        if (array.reduce((a, b) => a + b, 0) + truck_weights[0] <= weight) {
            array.push(truck_weights.shift());
        } else {
            array.push(0);
        }
        count++;
    }
    return count + bridge_length;
}
const bridge_length = 3;
const weight = 12;
const truck_weights = [3, 6, 4, 2, 6];
console.log(solution(bridge_length, weight, truck_weights));
