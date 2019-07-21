function solution(n) {
  var answer = (n + "").split("").reverse();
  // 자바스크립트의 자동 형 변환을 이용해서 자연수에 + ""(문자열)을 더해주면
  // 자동으로 문자열로 변환이 됩니다.
  // split메소드를 통해 배열로 변환한뒤 reverse메소드를 이용해서 역정렬을 해줍니다.

  for (const i in answer) answer[i] = answer[i] * 1;
  // for문을 통해 문자열로 변환된 배열의 값들을 다시한번 자바스크립트 자동 형 변환을 통해
  // 다시 자연수로 변환해 줍니다.

  return answer;
}
