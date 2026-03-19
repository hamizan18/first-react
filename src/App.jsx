import { useState, useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), text: input }
    ]);

    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

return (
  <>
    <h1>To-Do List</h1>

  <input 
    type='text'
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && addTodo()}
  />
  <button onClick={addTodo}>Tambah</button>

  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => deleteTodo(todo.id)}>Hapuz</button>
      </li>
    ))}
  </ul>

  </>
  );
}

export default App