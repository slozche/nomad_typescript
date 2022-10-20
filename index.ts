// 현재까지 배운 것을 토대로, 두 함수에 대한 호출 시그니쳐(call signatures)를 작성해주세요.
// last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
// prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.

const last = <T>(arr: T[]) => {
  const index = arr.length - 1;
  arr[index];
  return arr;
};

const prepend = <T, M>(arr: T[], item: M) => {
  return [item, ...arr];
};
