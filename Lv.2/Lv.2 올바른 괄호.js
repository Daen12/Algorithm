// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 정리 : 처음에 ) 로 시작하면 False.
// (())) 닫는 괄호가 더 많으면 False.

//===Version 1===//
// const s = '((()))(';

// function solution(s){
//     let bracketCount = 0;
//     for (let i =0; i<s.length; i++){
//         if(s[0]=== ')'){
//             return false;
//         } 
//         if(s[i] === '('){
//             bracketCount++;
//         } else{
//             bracketCount--;
//         } 
//     }  
//     return(bracketCount? false : true);  
// }
// console.log(solution(s))


//===Version 2===//
// const s = '((()))';
// function solution(s){
//     let bracketCount = 0;
//     for (let i = 0; i<s.length ; i++){
//         s[i] === '('? bracketCount++ : bracketCount--;
//         if(bracketCount <0) return false;
//     }
//     return bracketCount? false : true;
// }
// console.log(solution(s));

//===Version 3===//
function is_pair(s){
    var result = s.match(/(\(|\))/g);
    return result[0] == '(' && result.length % 2 == 0 ? true : false
  }
  
  

// function solution(s){
//     let bracket = [];
//     // if(s[0] === ')'){
//     //     return false;
//     // }
//     for (i=0; i<s.length; i++){
//         if(s[i] === '('){
//             bracket.push(s[i]); // bracket = ['(']
//         }
//         if(s[i] === ')'){
//             if(!bracket.length){
//                 return false;
//             } 
//             bracket.pop();
//             }
//         }
//     return (bracket.length? false : true);
// }
// let s = '(())()';
// console.log(solution(s));