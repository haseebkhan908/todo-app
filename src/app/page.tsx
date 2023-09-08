"use client";
import React, { useState } from 'react';


export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="mx-auto max-w-md ">
      <h1 className="text-3xl font-bold mb-2">TODO APP</h1>
      <div className="flex">
        <input
          className="border border-gray-400 mr-2 px-4 py-2 flex-grow rounded"
          type="text"
          placeholder="Enter a todo item"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-purple-300 hover:bg-purple-400 text-white font-bold px-4 py-2 rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="list-disc list-inside my-4">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {todo}
            <button
              className="bg-red-400 hover:bg-red-500 text-white font-bold px-2 py-1 rounded"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
