import './todo.css';

function ListItemComponent(props) {
  return (
    <li className={props.done ? 'done' : 'doing'}>
      {props.title}
      <button onClick={props.handleDoneClick}>Done</button>
    </li>
  );
}

export default ListItemComponent;
