import { array, IfElse } from "rprc";

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
