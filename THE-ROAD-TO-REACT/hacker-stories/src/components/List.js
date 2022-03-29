function List(props) {
  return (
    <div>
      <h2>List with props</h2>
      <code>props: {JSON.stringify(props, null, 2)}</code>
      <ul>
        {props.list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
