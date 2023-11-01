import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import Contribute from "./contribute/Contribute";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/contribute" element={<Contribute />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
