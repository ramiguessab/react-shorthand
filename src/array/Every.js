import React from "react";

function Every({ array, handler, children }) {
  children = React.Children.toArray(children);

  if (array.every(handler)) {
    return (
      children.find(
        (child) => child.type && child.type.displayName === "True"
      ) || null
    );
  } else {
    return (
      children.find(
        (child) => child.type && child.type.displayName === "False"
      ) || null
    );
  }
}

function TrueBlock({ children }) {
  return <>{children}</>;
}
TrueBlock.displayName = "True";

function FalseBlock({ children }) {
  return <>{children}</>;
}

FalseBlock.displayName = "False";

Every.True = TrueBlock;
Every.False = FalseBlock;

export { Every };
