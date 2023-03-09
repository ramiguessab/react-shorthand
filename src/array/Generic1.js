import React from "react";

function Generic1(action) {
  const func = ({ array, handler, children }) => {
    children = React.Children.toArray(children);

    if (array[action](handler)) {
      return (
        children.find(
          (child) => child.type && child.type.displayName === "True"
        ) ||
        children ||
        null
      );
    } else {
      return (
        children.find(
          (child) => child.type && child.type.displayName === "False"
        ) || null
      );
    }
  };
  function TrueBlock({ children }) {
    return <>{children}</>;
  }
  TrueBlock.displayName = "True";

  function FalseBlock({ children }) {
    return <>{children}</>;
  }

  FalseBlock.displayName = "False";

  func.True = TrueBlock;
  func.False = FalseBlock;

  return func;
}

export { Generic1 };
