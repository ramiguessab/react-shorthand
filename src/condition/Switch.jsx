import React from "react";

function Switch({ expression, children }) {
  children = React.Children.toArray(children);

  const Case = children.find(
    (child) =>
      child.type &&
      child.type.displayName === "case" &&
      child.props.match === expression
  );

  return (
    Case ||
    children.find(
      (child) => child.type && child.type.displayName === "default"
    ) ||
    null
  );
}

function CaseBlock({ match, children }) {
  return <>{children}</>;
}

CaseBlock.displayName = "case";

function DefaultBlock({ children }) {
  return <>{children}</>;
}

DefaultBlock.displayName = "default";

Switch.Case = CaseBlock;
Switch.Default = DefaultBlock;

export { Switch };
