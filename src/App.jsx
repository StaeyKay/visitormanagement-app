import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Checkin from "./pages/checkin";
import Checkout from "./pages/checkout";
import Navbar from "./components/ui/navbar";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="checkin" element={<Checkin />} />
          <Route path="checkout" element={<Checkout />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

export default App;

// { path: "/", element: <Welcome /> },
// { path: "checkin", element: <Checkin /> },
// { path: "checkout", element: <Checkout /> },
