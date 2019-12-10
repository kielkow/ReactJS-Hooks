import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState([]);

  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  // Like componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (tech)
      setTech(JSON.parse(storageTech))
  }, [])

  // Like componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
    <ul>
      { tech.map(t => (<li key={t}>{t}</li>))}
    </ul>
    <input type="text" value={newTech} onChange={e => setNewTech(e.target.value)}/>
    <button type="button" onClick={handleAdd}>Add</button>
    </>
  );
}

export default App;
