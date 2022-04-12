import React, {useState} from 'react';

const NewTodo = (props) => {
    const [todo, setTodo] = useState('')

    const handleInputChange = (e) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTodo(todo)
    }

  return (
      <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='todo'>Input new todo: </label>
            <input type= 'text' id='todo' name='todo' value={todo} onChange = {handleInputChange}/>
            <button>Add Todo</button>
          </div>   
      </form>
  )
}

export default NewTodo;
