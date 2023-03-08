import { Or } from "rprc";

function App() {
  return (
    <Or array={[null, "1"]}>
      <p>Hello</p>
    </Or>
  );
}

export default App;
