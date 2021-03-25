import React from 'react';
import { List } from '../styles/TodoList.styles';

interface Todo {
    description: string;
    isCompleted: boolean;
}

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (selectedTodo: Todo) => void;
}

export function TodoList ({todos, toggleTodo}: TodoListProps) {
    return (
        <List>
            {todos.map((todo) => (
                <div>
                    <label style={{textDecoration: todo.isCompleted ? 'line-through' : undefined}}>
                        <input type="checkbox" id="checkbox" checked={todo.isCompleted} onChange={() => toggleTodo(todo)}/>
                        {todo.description}
                    </label>
                    <br/>
                </div>               
            ))
            }
        </List>
    );
}