import { useAtom } from 'jotai';
import './App.css';
import { allPhotos, getAllPhotos } from './hooks/main';
import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import CartItmes from './pages/CartItmes';

function App() {
  const [, getAllPhotosAtom] = useAtom(getAllPhotos)
  const [allPhotosAtom] = useAtom(allPhotos)

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
