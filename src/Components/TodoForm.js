import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React ,{useState} from 'react';

const TodoForm = ({addTodo}) => {
  const [value, setvalue] =useState("")
  const handleSubmit = e => {e.preventDefault();
    
    addTodo(value);
    
    setvalue("")


  }
  return (
    <form class="TodoForm" onSubmit={hasFormSubmit}>
        <input type='text' className='todo-input' value={value}
        placeholder='what is the task today'onChange={(e)=> setvalue(e.target.value)}/>
        <button type='Submit' className='todo-btn'> Add Task </button>
      
    </form>
  );
}

export default TodoForm;
