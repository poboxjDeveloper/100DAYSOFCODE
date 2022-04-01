import { useState } from "react";
function Search() {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    console.log(event.target.value);
    setQuery(event.target.value);
  };

  const handleDrag = (event) => {
    event.preventDefault();
    console.log(event.clientX, event.clientY);
  };

  const handleClick = (event) => {
    event.preventDefault();
    event.target.value = "";
    setQuery(event.target.value);
  };

  return (
    <div>
      <div>{query}</div>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        draggable={true}
        onDrag={handleDrag}
        onClick={handleClick}
      />
    </div>
  );
}

export default Search;
