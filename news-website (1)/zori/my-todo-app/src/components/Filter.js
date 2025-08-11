import React from 'react';

const Filter = ({ todos }) => (
  <div>
    <h2 className="text-2xl font-semibold">Filter Todos</h2>
    <div>
      <h3>Open and On-Time Todos</h3>
      {todos.filter(todo => !todo.done && todo.onTime).map((todo, index) => (
        <p key={index}>{todo.title} - {todo.text}</p>
      ))}
    </div>
    <div>
      <h3>Open and Past-Due Todos</h3>
      {todos.filter(todo => !todo.done && !todo.onTime).map((todo, index) => (
        <p key={index}>{todo.title} - {todo.text}</p>
      ))}
    </div>
    <div>
      <h3>Done Todos</h3>
      {todos.filter(todo => todo.done).map((todo, index) => (
        <p key={index}>{todo.title} - {todo.text}</p>
      ))}
    </div>
  </div>
);

export default Filter;
