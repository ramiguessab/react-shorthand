import React from "react";

export function Map({ array, handler }) {
  return array.map(handler);
}

export function Find({ array, handler }) {
  return array.find(handler);
}

export function Filter({ array, handler }) {
  return array.filter(handler);
}

export function At({ array, index, Wrapper }) {
  return Wrapper === undefined ? (
    array.at(index)
  ) : (
    <Wrapper>{array.at(index)}</Wrapper>
  );
}
