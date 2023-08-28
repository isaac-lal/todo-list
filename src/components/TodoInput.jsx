import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const TodoInput = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='TodoInput__container'>
      <p
        onClick={() => toggleComplete(task.id)}
         className={`${task.completed ? 'TodoInput__complete' : ''}`}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  );
};

export default TodoInput;
