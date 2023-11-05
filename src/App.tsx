import ListGroup from "./components/ListGroup";

function App(){
  // self closing syntex in Message component />
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return <div><ListGroup items={items} heading="Cities"/></div>
}

export default App;