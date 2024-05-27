import React, {useState} from 'react';

function App() {
  const [data, setData] = useState(null);

  function handleClick() {
    fetch('http://localhost:3001/web')
    .then(response => {
      return response.json();
    })
    .then(data => {
      localStorage.setItem('webData', JSON.stringify(data));
      setData(data);
    })
    .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div className="App">
      <button onClick={handleClick}>INU</button>
      <div id="output">
        {data ? <pre>{JSON.stringify(data,null,2)}</pre> : 'No data available'}
      </div>
    </div>
  );
}

export default App;