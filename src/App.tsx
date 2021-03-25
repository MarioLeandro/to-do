import React, { useState } from 'react';
import {TodoList} from './components/TodoList';
import {TodoForm} from './components/TodoForm';
//styles
import { GlobalStyle } from './App.styles';


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
    if (todos.length < 11) {
      newTodo.trim() !== "" && setTodos([...todos, {description: newTodo, isCompleted: false}]);
    } else {
      alert("Limite de To-Do's atingido");
    }
  }

  return (
    <>
    <GlobalStyle/>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </>
  );
}

export default App;
