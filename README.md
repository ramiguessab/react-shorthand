# React-Shorthand

React Component library that have some conditional operations and array method as components

**[NPM Registry](https://www.npmjs.com/package/react-shorthand)**

## Components

- **If**
- **IfElse**
- **Switch**
- **And**
- **Or**
- **array**
  - Map
  - At
  - Find
  - Filter

## Demo

- ### IfElse

  > **If/IfElse** take same Props (**key** prop is for the Map method handler)

  ```javascript
  import { IfElse } from "rprc";

  const variable = "Hello";

  function App() {
    return (
      <IfElse condition={variable === "Hello"}>
        <IfElse.If>
          <p>How Are You???</p>
        </IfElse.If>

        <IfElse.Else>
          <p>I am Fine</p>
        </IfElse.Else>
      </IfElse>
    );
  }
  ```

- ### **array**

  > - **At**(\*array, \*index, Wrapper)
  > - **Map**(\*array, \*Wrapper) / **PS**: No need to specify a key \
  > - **Find/Filter**(\*array, \*handler)

  ```javascript
  import { array } from "react-shorthand";

  function Wrapper({ item, index }) {
    return (
      <p>
        {index}.{item.item}
      </p>
    );
  }

  function App() {
    return (
      <array.Map
        array={[
          { _id: 1, item: "1" },
          { id: 2, item: "2" },
          { key: 3, item: "3" },
          { item: "4" },
        ]}
        Wrapper={Wrapper}
      />
    );
  }
  ```

- ### **Switch**

  ```javascript
  import { Switch } from "react-shorthand";

  function App() {
    return (
      <Switch expression={"expression"}>
        <Switch.Case match="boo" children={<p>boo</p>} />

        <Switch.Case match="foo">
          <p>foo</p>
        </Switch.Case>

        <Switch.Default>
          <p>bar</p>
        </Switch.Default>
      </Switch>
    );
  }
  ```

- ### **Or/And**

  > **And/Or** take same Props

  ```javascript
  import { Or } from "react-shorthand";

  function App() {
    return <Or array={[null, "1"]} />;
  }
  ```
