import React from 'react';
import { useState } from 'react';
import ListItemComponent from './Component/ListItemComponent';

function TodoList() {
  const [listItem, setListItem] = useState([
    { id: 1234567891, title: 'titre', done: false },
    { id: 1234567892, title: 'titre2', done: false },
    { id: 1234567893, title: 'titre3', done: true },
  ]);

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleAddClick = (event) => {
    event.preventDefault();
    const newItem = { id: Date.now(), title: message, done: false };
    console.log(newItem);
    setListItem((listItem) => [...listItem, newItem]);
  };
  function handleDoneClick(idToDone){
    setListItem(listItem.map(item => {
      if (item.id === idToDone){
        return {...item, done: !item.done};
      }
      return item;
    }));
  }
  return (
    <div>
      <h1>A faire</h1>

      <div>
        <label>
          What must be do ? <input onChange={handleChange} type="text"></input>
        </label>
        <button onClick={handleAddClick}>Add #{listItem.length}</button>
      </div>

      <ul>
        {listItem.map((item) => (
          <ListItemComponent key={item.id} title={item.title} done={item.done} handleDoneClick={() => (handleDoneClick(item.id))}></ListItemComponent>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
