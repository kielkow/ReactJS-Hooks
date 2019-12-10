import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);

  const [newTech, setNewTech] = useState('');

  // Used to avoid render function handleAdd everytime
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

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

  // Used to avoid call tech.length on render everytime
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
    <ul>
      { tech.map(t => (<li key={t}>{t}</li>))}
    </ul>
    <strong>You have {techSize} techs</strong>
    <br/>
    <input type="text" value={newTech} onChange={e => setNewTech(e.target.value)}/>
    <button type="button" onClick={handleAdd}>Add</button>
    </>
  );
}

export default App;
