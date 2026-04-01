export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.reduce((acc, num) => acc - num);
}

export function multiply(numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
}

export function divide(numbers) {
  return numbers.reduce((acc, num) => {
    if (num === 0) return NaN;
    return acc / num;
  });
}
