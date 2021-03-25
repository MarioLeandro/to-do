import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../styles/TodoForm.styles';
import api from './../api';


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
    
    function postData(description : string){
        api.post("/createTodo",{
            description
      });
    }
    return (
        <Input>
            <form action={`https://2d4b2c7b3192.ngrok.io/createTodo`}  method="POST">
                <input name="description" type="text" value={newTodo} onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Add To-Do</button>
            </form>
        </Input>
    );
}
