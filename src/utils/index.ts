export function debounced<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) {
  console.log("I ran!");
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
