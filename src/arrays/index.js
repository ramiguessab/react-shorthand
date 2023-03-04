export function Map({ array, handler }) {
  return array.map(handler);
}

export function Find({ array, handler }) {
  return array.find(handler);
}

export function Filter({ array, handler }) {
  return array.filter(handler);
}

export function Every({ array, handler }) {
  return array.every(handler);
}
