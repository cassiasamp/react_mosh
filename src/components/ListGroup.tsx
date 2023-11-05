import { useState } from "react";

// { items: [], heading: string }
interface Props{
// type annotation 
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }:Props) {
  
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // deduplicationg previous code
  return (
    <>
      <h1>{ heading }</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // in an API -> item.id
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => { 
                setSelectedIndex(index);
                onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
