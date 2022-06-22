import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }
  const updateCar = () => {
    setCar(previousState => {
      return { ...previousState, brand: "Nisan",model:"qashqai",year:"2018",color:"white" }
    });
  }
  const ReturnOriginal = () => {
    setCar(previousState => {
      return { ...previousState, brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"}
    });
  }


  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >change color</button>
       <button
        type="button"
        onClick={updateCar}
      >different</button>
      <button
        type="button"
        onClick={ReturnOriginal}
      >return to original values</button>
    </div>
  )
}

export default Car