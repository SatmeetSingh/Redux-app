
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Tracker from "./Components/Tracker/Tracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
