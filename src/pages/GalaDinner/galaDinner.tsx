import { useState } from "react";
import "./galaDinner.scss";

const seatingData = [
  { name: "Rahul Mehta", table: 12, seat: 4 },
  { name: "Ananya Patel", table: 5, seat: 2 },
  { name: "Kunal Shah", table: 8, seat: 1 }
];

const GalaDinner = () => {

  const [name, setName] = useState("");
  const [result, setResult] = useState<any>(null);

  const findSeat = () => {
    const guest = seatingData.find(
      (g) => g.name.toLowerCase() === name.toLowerCase()
    );
    setResult(guest || "notfound");
  };

  return (
    <section className="gala-page">

      <div className="gala-header">
        <p className="gala-small">EVENING EVENT</p>
        <h1 className="gala-title">Gala Dinner</h1>
      </div>

      {/* SEATING FINDER */}

      <div className="seating-section">

        <h2>Seating Finder</h2>

        <div className="finder-box">

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={findSeat}>
            Find Seat →
          </button>

        </div>

        {result && result !== "notfound" && (
          <div className="seat-result">
            Table <strong>{result.table}</strong> — Seat{" "}
            <strong>{result.seat}</strong>
          </div>
        )}

        {result === "notfound" && (
          <p className="notfound">
            Guest not found.
          </p>
        )}

      </div>


      {/* DINNER MENU */}

      <div className="menu-section">

        <h2>Dinner Menu</h2>

        <div className="menu-grid">

          <div className="menu-card">
            <h3>Starter</h3>

            <p>
              Roasted Tomato Soup
              <span className="label vegan">Vegan</span>
            </p>

            <p>
              Garden Salad
              <span className="label vegetarian">Vegetarian</span>
            </p>

          </div>


          <div className="menu-card">
            <h3>Main Course</h3>

            <p>
              Grilled Paneer Steak
              <span className="label vegetarian">Vegetarian</span>
            </p>

            <p>
              Herb Rice & Veggies
              <span className="label vegan">Vegan</span>
            </p>

          </div>


          <div className="menu-card">
            <h3>Dessert</h3>

            <p>
              Chocolate Mousse
              <span className="label gluten">Gluten Free</span>
            </p>

            <p>
              Fruit Platter
              <span className="label vegan">Vegan</span>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default GalaDinner;