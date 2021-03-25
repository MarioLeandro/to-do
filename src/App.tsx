import React, { useState } from 'react';
import {TodoList} from './components/TodoList';
import {TodoForm} from './components/TodoForm';


interface Todo {
  description: string;
  isCompleted: boolean;
}

function App() {
  const[todos, setTodos] = useState<Todo[]>([]);

  function toggleTodo (selectedTodo: Todo) {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function addTodo (newTodo: string) {
    newTodo.trim() !== "" && setTodos([...todos, {description: newTodo, isCompleted: false}]);
  }

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;