import "./styles.css";
import Navbar from "./components/Navbar";
import Journal from "./components/Journal";
import travelData from "./data";

export default function App() {
  const journals = travelData.map((item) => {
  return <Journal {...item} key={item.id} />;
});

  return (
    <div className="App">
      <Navbar />
      {journals}
    </div>
  );
}
