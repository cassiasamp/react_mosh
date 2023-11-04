// import { Fragment } from "react";

function ListGroup() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

   items = [];

   if (items.length === 0)
    return <p>No item found</p>;

  return (
    <>
        <h1>List </h1>
        <ul className="list-group">
            {items.map((item) => (
                // in an API -> item.id
                <li key={item}>{item}</li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;
