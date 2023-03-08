import { IfElse } from "rprc";

const variable = "Hi";

function App() {
  return (
    <IfElse condition={variable === "Bay Bay"}>
      <IfElse.If>
        <p>How Are You???</p>
      </IfElse.If>

      <IfElse.Else>
        <p>Good Bay</p>
      </IfElse.Else>
    </IfElse>
  );
}

export default App;
