import { useEffect, useState } from "react";
import CarCard from "./component/Card.jsx";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
      const API = import.meta.env.VITE_API_URL;
    fetch(`${API}/cars`)
      .then(res => res.json())
      .then(data => setCars(data));
  }, []);
  return (
    <div className="container">
      <h1>Car Collection</h1>
      <div className="grid">
        {cars.map(car => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
