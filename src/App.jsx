import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import ItemDetail from './pages/ItemDetail';
import AuthPage from './pages/AuthPage';
import CategoryPage from './pages/CategoryPage';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;