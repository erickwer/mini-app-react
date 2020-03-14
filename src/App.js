import React, { useState, useEffect } from 'react';
import api from './services/api'
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function loadPhotos() {
      const response = await api.get('/photos');
      setPhotos(response.data)
    }
    loadPhotos();
  }, []);

  return (
    <main>
      <ul className="photo-list">
        {photos.map(photo => (
          <li className="photo-item" key={photo.id}>
            <div className="card" >
              <img src={photo.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default App;
