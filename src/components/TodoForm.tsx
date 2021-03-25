import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../styles/TodoForm.styles';


interface TodoFormProps {
    addTodo: (newTodo: string) => void;
}

export function TodoForm ({addTodo}: TodoFormProps) {
    const[newTodo, SetNewTodo] = useState("");

    function handleChange (e: ChangeEvent<HTMLInputElement>) {
        SetNewTodo(e.target.value);
    }

    function handleSubmit (e: FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        addTodo(newTodo);
        SetNewTodo("");
    }

    return (
        <Input>
            <form>
                <input type="text" value={newTodo} onChange={handleChange}/>
                <button type="submit" onClick={handleSubmit}>Add To-Do</button>
            </form>
        </Input>
    );
}