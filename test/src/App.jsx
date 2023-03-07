import { array } from "rprc";

function Hello({ item, id }) {
  return (
    <>
      <h1>{item}</h1>
      <h2>{id}</h2>
    </>
  );
}

function App() {
  return (
    <array.Map
      array={[
        { id: 38478322, item: "2" },
        { id: 57859089, item: "1" },
      ]}
      Wrapper={Hello}
    />
  );
}

export default App;
