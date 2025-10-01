import { useState } from 'react';
import './App.css';

const mockPets = [
  {
    id: 1,
    name: 'Bella',
    type: 'Dog',
    breed: 'Labrador',
    age: 3,
    image: 'https://placedog.net/400/300?id=1',
  },
  {
    id: 2,
    name: 'Milo',
    type: 'Cat',
    breed: 'Siamese',
    age: 2,
    image: 'https://placecats.com/neo/400/300?image=2',
  },
  {
    id: 3,
    name: 'Charlie',
    type: 'Dog',
    breed: 'Beagle',
    age: 4,
    image: 'https://placedog.net/400/300?id=3',
  },
];

function App() {
  const [adopted, setAdopted] = useState([]);

  const handleAdopt = (petId) => {
    setAdopted([...adopted, petId]);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Home4Paws</h1>
        <p>Find your new best friend today!</p>
      </header>
      <main>
        <h2>Available Pets for Adoption</h2>
        <div className="pet-list" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {mockPets.map((pet) => (
            <div key={pet.id} className="pet-card" style={{
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderRadius: '12px',
              background: '#000',
              padding: '1rem',
              width: '260px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img src={pet.image} alt={pet.name} className="pet-image" style={{
                width: '220px',
                height: '160px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }} />
              <h3 style={{ margin: '0.5rem 0' }}>{pet.name}</h3>
              <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <div><strong>Type:</strong> {pet.type}</div>
                <div><strong>Breed:</strong> {pet.breed}</div>
                <div><strong>Age:</strong> {pet.age} years</div>
              </div>
              <button
                disabled={adopted.includes(pet.id)}
                onClick={() => handleAdopt(pet.id)}
                style={{
                  padding: '0.5rem 1.5rem',
                  borderRadius: '6px',
                  border: 'none',
                  background: adopted.includes(pet.id) ? '#ccc' : '#4caf50',
                  color: '#fff',
                  cursor: adopted.includes(pet.id) ? 'not-allowed' : 'pointer'
                }}
              >
                {adopted.includes(pet.id) ? 'Adopted' : 'Adopt'}
              </button>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2025 Home4Paws. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
