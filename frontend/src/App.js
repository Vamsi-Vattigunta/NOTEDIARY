import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./screens/RegisterScreen/Register";
import Login from "./screens/LoginScreen/Login";
import CreateNote from "./screens/CreateNote/CreateNote";
import UpdateNote from "./screens/UpdateNote/UpdateNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <div className="App">
        <Header setSearch={setSearch} />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/createnote" element={<CreateNote />} />
            <Route path="/notes/:id" element={<UpdateNote />} />
            <Route path="/mynotes" element={<MyNotes search={search} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
