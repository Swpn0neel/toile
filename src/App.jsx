import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import Auth from "./auth/Auth";
import Contribute from "./contribute/Contribute";
import "./index.css";

function App() {
  //   const router = createBrowserRouter([
  //     { path: "/", element: <Home /> },
  //     { path: "/auth", element: <Auth /> },
  //     { path: "/contribute", element: <Contribute /> },
  //   ]);

  return (
    // <div className="app">
    //   {/* <RouterProvider router={router} /> */}
    // </div>
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/contribute" element={<Contribute />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
