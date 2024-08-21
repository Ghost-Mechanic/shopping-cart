import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} />
      <Outlet context={[cart, setCart]} />
      <Footer />
    </>
  )
}

export default App;
