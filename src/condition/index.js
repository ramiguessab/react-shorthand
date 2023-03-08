export { IfElse } from "./IfElse";
export { Switch } from "./Switch";
export function If({ condition, children }) {
  if (condition) {
    return children;
  } else {
    return null;
  }
}
export function And({ array, children }) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      return null;
    }
  }
  return children === undefined ? array[array.length - 1] : children;
}
export function Or({ array, children }) {
  const result = array.find((item) => item);

  if (result) {
    if (children === undefined) {
      return result;
    }
    return children;
  } else {
    null;
  }
}
