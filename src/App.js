import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
