// TodoList.js
import React, { useState } from 'react';
import { connect } from 'react-redux';

const TodoList = ({ todos, addTodo, removeTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo({ id: Date.now(), text: newTodo });
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    removeTodo(id);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

// mapStateToProps: Maps the state from the Redux store to component props
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

// mapDispatchToProps: Maps action creators to component props
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch({ type: 'ADD_TODO', payload: todo }),
    removeTodo: (id) => dispatch({ type: 'REMOVE_TODO', payload: id }),
  };
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
