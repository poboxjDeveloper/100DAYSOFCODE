import { useState } from "react";
const initialList = [
  { id: "a", name: "Learn React" },
  { id: "b", name: "Learn GraphQL" },
];

const ListWithStableIndex = () => {
  const [list, setList] = useState(initialList);

  const handleClick = (event) => {
    setList(list.slice().reverse());
  };

  return (
    <div>
      <h2>React List Key: ListWithStableIndex</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" />
              {item.name}
            </label>
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleClick}>
        Reverse List
      </button>
    </div>
  );
};

export default ListWithStableIndex;
