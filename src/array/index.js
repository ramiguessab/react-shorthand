import React from "react";
import { nanoid } from "nanoid";

export function Map({ array, Wrapper }) {
  return array.map((item, index) => (
    <Wrapper
      item={item}
      index={index}
      key={item.key || item.id || item._id || nanoid()}
    />
  ));
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
