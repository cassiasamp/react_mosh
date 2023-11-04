// import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];


  // deduplicationg previous code
  return (
    <>
      <h1>List </h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          // in an API -> item.id
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
