import './App.css';

import Card from "./components/Card";

function App() {
  return (
    <div className="App">

      <Card
          cardID={`sedan`}
          cardImage={`icon-sedans.svg`}
          cardTitle={`SEDANS`}
          backColorProp={`hsl(31, 77%, 52%)`}
          bodyMessage={`Choose a sedan for its affordability and excellent fuel economy.
                        Ideal for cruising in the city or on your next road trip.`}
          btnColor={`hsl(31, 77%, 52%)`}
      />
      <Card
          cardID={`suv`}
          cardImage={`icon-suvs.svg`}
          cardTitle={`SUVS`}
          backColorProp={`hsl(184, 100%, 22%)`}
          bodyMessage={`Take on SUV for its spacious interior, power, and versatility. Perfect for your next
                        family vacation and oof-road adventures.`}
          btnColor={`hsl(184, 100%, 22%)`}
      />
      <Card
          cardID={`luxury`}
          cardImage={`icon-luxury.svg`}
          cardTitle={`LUXURY`}
          backColorProp={`hsl(179, 100%, 13%)`}
          bodyMessage={`Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort
                        of a luxury rental and arrive in style.`}
          btnColor={`hsl(179, 100%, 13%)`}
      />

    </div>
  );
}

export default App;
