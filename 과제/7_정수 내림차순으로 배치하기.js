function solution(n) {
  var answer =
      (n + "")
      .split("")
      .sort()
      .reverse()
      .join("") * 1;
  // n => 문자열
  // 문자열 => 배열
  // 배열 => 오름차순 정렬
  // 역정렬
  // 배열 => 문자열 => 숫자형
  return answer;
}
