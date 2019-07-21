function solution(arr) {
  let arr2 = arr.slice();
  // 배열을 복사하게 되면 참조값을 복사하기때문에 실제로 수정시 두배열 모두 수정된다.
  // slice메소드를 사용하면 배열값을 추출해서 복사할수 있습니다.
  const arrMin = arr.indexOf(arr2.sort((a, b) => a - b)[0]);
  // 전달받은 배열의 가장 작은값의 인덱스를 구하기위해
  // 복사한 배열을 오름차순으로 정렬하고 첫번째 값 즉 제일 작은값을구한뒤 indexOf메소드의 인자로 넘겨줍니다.
  // arrMin 변수에 가장작은값의 인덱스가 들어가게 되고
  arr.splice(arrMin, 1);
  // splice 메소드를사용해서 인덱스위치에서부터 하나의 값 을 삭제 합니다.

  if (arr.length < 1) {
    return [-1];
  }
  // 배열의 크기가 1보다 작다면 [-1] 배열을 리턴합니다.

  return arr;
}
