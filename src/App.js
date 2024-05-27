import React, {useState} from 'react';

function App() {
  const [data, setData] = useState(null);
  // 버튼 클릭 이벤트 생성
  function handleClick() {
    // 해당 주소로부터 JSON 데이터를 fetch
    fetch('http://localhost:3001/web')
    .then(response => {
      return response.json();
    })
    .then(data => {
      // 데이터를 localStorage에 저장
      localStorage.setItem('webData', JSON.stringify(data));
      // 저장한 데이터를 get
      const savedData = localStorage.getItem('webData');
      // get한 데이터가 존재하면 JS 객체로 변환한 뒤 상태 업데이트
      if (savedData) {
        setData(JSON.parse(savedData));
      }
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