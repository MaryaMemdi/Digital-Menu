import Pizza from "./pizza";

const Menu = () => {
  return (
    <div className="menu">
      <h2>our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <Pizza />
    </div>
  );
};

export default Menu;
