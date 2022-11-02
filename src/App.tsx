import React, { useState } from "react";
import "./App.css";
import Checkbox from "./components/checkbox";

interface CarModel {
  id: number;
  name: string;
}

const futureCars: CarModel[] = [
  {
    id: 1,
    name: "Volkswagen",
  },
  {
    id: 2,
    name: "BMW",
  },
  {
    id: 3,
    name: "Toyota",
  },
  {
    id: 4,
    name: "Nissan",
  },
  {
    id: 5,
    name: "General Motors",
  },
  {
    id: 6,
    name: "Hyundai",
  },
  {
    id: 7,
    name: "Peugeot",
  },
  {
    id: 8,
    name: "Kia",
  },
  {
    id: 9,
    name: "Volvo",
  },
  {
    id: 10,
    name: "Mazda",
  },
];

function App() {
  const [data, setData] = useState<CarModel[]>(futureCars);
  const [selectedCarsId, setSelectedCarsId] = useState<string[]>([]);

  const handleChange = (event: any) => {
    let updatedList = [...selectedCarsId];
    if (event.target.checked) {
      updatedList = [...selectedCarsId, event.target.id];
    } else {
      updatedList.splice(selectedCarsId.indexOf(event.target.value), 1);
    }
    setSelectedCarsId(updatedList);
  };

  const handleReset = () => {
    setSelectedCarsId([]);
    setData(futureCars);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedCars: CarModel[] = [];
    selectedCarsId.map((id) => {
      const car = futureCars.find((car) => car.id === Number(id));
      car && selectedCars.push(car);
    });
    const filterdFutureCars = futureCars
      .filter((dx) => !selectedCarsId.find((val) => dx.id === Number(val)))
      .sort((a, b) => a.id - b.id);
    const sortedSelectedCars = selectedCars.sort((a, b) => a.id - b.id);
    const sortedData = [...sortedSelectedCars, ...filterdFutureCars];

    setData(sortedData);
  };

  return (
    <div className="App">
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <header className="App-header">
          <div className="options-container">
            <div className="item-row header">
              <button className="btn" type="reset">
                reset
              </button>
              <h2>Future Cars</h2>
              <button
                className={
                  "btn " + (!(selectedCarsId.length > 0) && " disapear")
                }
                type="submit"
              >
                applyChanges
              </button>
            </div>
            <div className="body">
              {data.map((item) => (
                <Checkbox
                  key={item.id}
                  id={item.id + ""}
                  name={item.name}
                  label={item.name}
                  onChange={handleChange}
                  checked={selectedCarsId.includes(item.id.toString())}
                />
              ))}
            </div>
          </div>
        </header>
      </form>
    </div>
  );
}

export default App;
