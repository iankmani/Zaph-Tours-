import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destinations/Destination";
import Trip from "./pages/Trip Types/Trip";
import ContactUs from "./pages/contact Us/ContactUs";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destinations" element={<Destination />} />
          <Route path="/Trip Types" element={<Trip />} />
          <Route path="Contact Us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
