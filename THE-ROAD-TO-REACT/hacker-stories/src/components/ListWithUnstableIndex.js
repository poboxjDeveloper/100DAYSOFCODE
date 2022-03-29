import { useState } from "react";

const initialList = ["Learn React", "Learn GraphQL"];

const ListWithUnstableIndex = () => {
  const [list, setList] = useState(initialList);

  const handleClick = (event) => {
    setList(list.slice().reverse());
  };

  return (
    <div>
      <h2>React List Key: ListWithUnstableIndex</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" />
              {item}
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

export default ListWithUnstableIndex;
