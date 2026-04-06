import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await axios.post('http://127.0.0.1:8000/analyze', formData);
    setResult(res.data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Intent-Based Learning</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Analyze</button>
      {result && (
        <div>
          <h3>Issues</h3>
          <ul>
            {result.issues.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
          <h3>Refined</h3>
          <pre>{result.refined}</pre>
          <a href={result.download}>Download PDF</a>
        </div>
      )}
    </div>
  );
}

export default App;
