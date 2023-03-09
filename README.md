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

- ### **IfElse**

  > **If/IfElse** take same Props (**key** prop is for the Map method handler)

  ```javascript
  import { IfElse } from "react-shorthand";

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
  > - **Find/Filter/Every/Some**(\*array, \*handler)

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

  - **Every/Some**

  ```javascript
  import { array } from "react-shorthand";

  function App() {
    return (
      <array.Every array={["1", "2"]} handler={(item) => item === "2"}>
        <array.Every.True>
          <p>Hello</p>
        </array.Every.True>

        <array.Every.False>
          <p>Good Bay</p>
        </array.Every.False>
      </array.Every>
    );
  }
  ```

  ```javascript
  import { array } from "react-shorthand";

  function App() {
    return (
      <array.Some array={["1", "1"]} handler={(item) => item === "1"}>
        <p>Hello</p>
      </array.Some>
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
    return <Or array={[null, "foo"]} />;
  }
  ```

  ```javascript
  import { And } from "react-shorthand";

  function App() {
    return (
      <And array={["foo", "bar"]}>
        <p>Hello</p>
      </And>
    );
  }
  ```
