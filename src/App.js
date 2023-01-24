import { useAtom } from 'jotai';
import './App.css';
import { getAllPhotos } from './hooks/atoms';
import React from 'react';
import Home from './pages/Home';
import Header from './component/Header';
import { Routes, Route } from "react-router-dom";
import CartItmes from './pages/CartItmes';

function App() {
  const [, getAllPhotosAtom] = useAtom(getAllPhotos)

  React.useEffect(() => {
    getAllPhotosAtom()
  }, [])

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartItmes />} />
      </Routes>
    </div>
  );
}

export default App;
