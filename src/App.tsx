import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = "./pages/home";
const Search = "./pages/search";
const Cart = "./pages/cart";

const App = () => {
  return (
    <Router>
      {/* Header */}
      <Suspense fallback={}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </Suspence>
    </Router>
  );
};

export default App;
