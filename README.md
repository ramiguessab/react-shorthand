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
  - Every
  - Find
  - Filter

## Demo

- ### **array / IfElse**

> **If/IfElse** take same Props
>
> All **array** methods take same Props

```javascript
import { array, IfElse } from "react-shorthand";

function App() {
  return (
    <array.Map
      array={["a", "b"]}
      handler={(item, index) => (
        <IfElse condition={index === 1} key={index}>
          <IfElse.If>
            <p>{item}</p>
          </IfElse.If>

          <IfElse.Else>
            <p>Nothing</p>
          </IfElse.Else>
        </IfElse>
      )}
    />
  );
}

export default App;
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

export default App;
```

- ### **Or/And**

> **And/Or** take same Props

```javascript
import { Or } from "react-shorthand";

function App() {
  return <Or array={[null, "1"]} />;
}

export default App;
```
