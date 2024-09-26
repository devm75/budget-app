export function debounced<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) {
  let timerId: ReturnType<typeof setTimeout> | null;
  return function (...args: Parameters<T>): void {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export function formatAmount(amount: string): string {
  let amtNum = reverseString(amount.split(".")[0]);
  const amtDecimal = amount.split(".")[1];

  let finalString = "";
  let numLength = amtNum.length;
  for (let i = numLength - 1; i >= 0; i--) {
    if (i % 3 === 0 && i !== 0) {
      finalString += amtNum[i] + ",";
    } else {
      finalString += amtNum[i];
    }
  }
  return finalString + "." + amtDecimal;
}

export function reverseString(input: string): string {
  let returnString = "";

  for (let i = input.length - 1; i >= 0; i--) {
    returnString += input[i];
  }
  return returnString;
}

export const calDiff = (amt1: string, amt2: string): string => {
  const amount1 = parseFloat(amt1);
  const amount2 = parseFloat(amt2);

  return formatAmount((amount1 - amount2).toString());
};
