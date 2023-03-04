# React-Shorthand

React Component library that have some conditional operations and array method as components

**[NPM Registry](https://www.npmjs.com/package/react-shorthand)**

## Components

- If
- IfElse
- And
- Or
- array
  - Map
  - Every
  - Find
  - Filter

## Props

- If/IfElse:

  - condition

- And/Or:

  - array

- array:
  - array
  - handler

## Demo

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
