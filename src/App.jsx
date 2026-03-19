import {useState} from 'react';

function App() {
  const notes = [
    {id: 1, title: "belajar react"},
    {id: 2, title: "tanpa supabase"}
  ];

  return (
    <>
      {notes.map(note => (
        <h1 key={note.id}>{note.title}</h1>
      ))}
    </>
  );
}

export default App