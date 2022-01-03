import React from 'react';
import './App.css';


interface CarModel {
  id: number;
  name: string;
}

const futureCars: CarModel[] = [
  {
    id: 1,
    name: 'Volkswagen'
  },
  {
    id: 2,
    name: 'BMW'
  },
  {
    id: 3,
    name: 'Toyota' 
  },
  {
    id: 4,
    name: 'Nissan'
  },
  {
    id: 5,
    name: 'General Motors'
  },
  {
    id: 6,
    name: 'Hyundai'
  },
  {
    id: 7,
    name: 'Peugeot'
  },
  {
    id: 8,
    name: 'Kia'
  },
  {
    id: 9,
    name: 'Volvo'
  },
  {
    id: 10,
    name: 'Mazda'
  }
]


function App() {

  return (
    <div className="App">

      <header className="App-header">
        <h2>Future Cars</h2>
      </header>
     
    </div>
  );
}

export default App;


