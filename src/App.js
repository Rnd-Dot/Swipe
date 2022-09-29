import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Part1 from "./components/main/Path1/Part1";
import Part2 from "./components/main/Path2/Part2";
import Swipe from "./components/main/Swipe/Swipe";

function App() {
  return (
    <div className="App">
      <Header />
      <Part1 />
      <Swipe />
      <Part2 />
      <Footer />
    </div>
  );
}

export default App;
