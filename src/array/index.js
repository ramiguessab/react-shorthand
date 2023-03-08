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

function Generic(action) {
  return ({ array, handler, children }) => {
    const result = array[action](handler) || null;

    return typeof children === "function" ? children(result) : result;
  };
}

export const Find = Generic("find");
export const Filter = Generic("filter");
export const At = Generic("at");

export { Every } from "./Every";
