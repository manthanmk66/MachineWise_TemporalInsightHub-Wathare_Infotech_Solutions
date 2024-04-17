import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/home";
import Simulator from "../src/pages/simulator";
import Error from "./pages/errorpage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Homepage />
        <Simulator />
        <Routes>
          <Route path="/errorpage" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
