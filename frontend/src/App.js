import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <main style={{ minHeight: "93vh" }}></main>

      <Footer />
    </div>
  );
}

export default App;
