const ListItem = (props) => (
  <li key={props.key}>
    <small>List item {props.key}</small>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

export default ListItem;
