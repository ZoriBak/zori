import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const CreateTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    if (title && text && time) {
      addTodo(title, text, time);
      setTitle('');
      setText('');
      setTime('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Create Todo</h2>
      <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="my-2" />
      <Input placeholder="Text" value={text} onChange={(e) => setText(e.target.value)} className="my-2" />
      <Input type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} className="my-2" />
      <Button onClick={handleSubmit} disabled={!title || !text || !time} className="mt-2">Add Todo</Button>
    </div>
  );
};

export default CreateTodo;
