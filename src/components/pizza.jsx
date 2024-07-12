import { pizzaData } from "../../public/data";

const Pizza = () => {
  return (
    <div className="pizzas">
      {Object.keys(pizzaData).map((key) => (
        <div className={`pizza ${pizzaData[key].soldOut ? "sold-out" : ""}`}>
          <img src={pizzaData[key].photoName} />
          <div>
            <h3>{pizzaData[key].name}</h3>
            <p>{pizzaData[key].ingredients}</p>
            <span>
              {pizzaData[key].soldOut ? "SOLD OUT" : pizzaData[key].price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Pizza;
