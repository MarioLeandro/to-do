import React from 'react';

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
        <div>
            {todos.map((todo) => (
                <li>
                    <label style={{textDecoration: todo.isCompleted ? 'line-through' : undefined}}>
                        <input type="checkbox" id="checkbox" checked={todo.isCompleted} onChange={() => toggleTodo(todo)}/>
                        {todo.description}
                    </label>
                </li>
            ))
            }
        </div>
    );
}