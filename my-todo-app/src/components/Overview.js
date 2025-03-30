import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Overview = ({ todos, toggleDone }) => (
  <div>
    <h2 className="text-2xl font-semibold">Overview</h2>
    {todos.map((todo, index) => (
      <Card key={index} className="my-3">
        <CardContent>
          <p>{todo.title} - {todo.text} ({todo.time})</p>
          <p>Status: {todo.done ? 'Done' : 'Open'} | {todo.onTime ? 'On Time' : 'Past Due'}</p>
          <Button onClick={() => toggleDone(index)} className="mt-2">
            {todo.done ? 'Undo' : 'Mark as Done'}
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default Overview;
