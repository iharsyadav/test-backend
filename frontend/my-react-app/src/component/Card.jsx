function CarCard({ car }) {
  return (
    <div className="card">
      <h3>{car.name}</h3>
      <p>{car.brand}</p>
      <p>{car.price}</p>
    </div>
  );
}

export default CarCard;
