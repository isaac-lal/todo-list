import React, { useState } from 'react';

const EditTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);

    setValue('');
  };

  return (
    <form
      className='TodoForm__container'
      onSubmit={handleSubmit}>
      <input
        type='text'
        className='TodoForm__input'
        value={value}
        placeholder='Update Task'
        onChange={e => setValue(e.target.value)}
      />
      <button
        type='submit'
        className='TodoForm__btn'>
        Update Task
      </button>
    </form>
  );
};

export default EditTodo;
