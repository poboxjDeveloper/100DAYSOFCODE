import ListItem from "./ListItem";

function List(props) {
  return (
    <div>
      <h2>List with props</h2>
      <code>props: {JSON.stringify(props, null, 2)}</code>
      <br />
      <ul>
        <li key={"arrow"}>arrow</li>
        {props.list.map((item) => (
          <ListItem key={item.objectID} item={item} />
        ))}

        <li key={"function"}>function</li>
        {props.list.map(function (item) {
          return <ListItem key={item.objectID} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default List;
