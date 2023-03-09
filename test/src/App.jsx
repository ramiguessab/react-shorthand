import { array } from "rprc";

function App() {
  return (
    <array.Every array={["1", "1"]} handler={(item) => item === "2"}>
      <array.Every.True>
        <p>Hello</p>
      </array.Every.True>

      <array.Every.False>
        <p>Good Bay</p>
      </array.Every.False>
    </array.Every>
  );
}

export default App;
