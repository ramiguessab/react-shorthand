export { IfElse } from "./IfElse";
export function If({ condition, children }) {
  if (condition) {
    return children;
  } else {
    return null;
  }
}
export function And({ array }) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      return null;
    }
  }
  return array[array.length - 1];
}
export function Or({ array }) {
  return array.find((item) => item);
}
