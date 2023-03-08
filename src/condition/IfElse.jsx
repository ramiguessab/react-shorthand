import React from "react";

function IfElse({ condition, children }) {
  children = React.Children.toArray(children);

  if (condition) {
    return (
      children.find((child) => child.type && child.type.displayName == "If") ||
      null
    );
  } else {
    return (
      children.find(
        (child) => child.type && child.type.displayName == "Else"
      ) || null
    );
  }
}

function IfBlock({ children }) {
  return <>{children}</>;
}
IfBlock.displayName = "If";

function ElseBlock({ children }) {
  return <>{children}</>;
}
ElseBlock.displayName = "Else";

IfElse.If = IfBlock;
IfElse.Else = ElseBlock;

export { IfElse };
