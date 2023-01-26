import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import CartProvider from './shared/context/CartContext';
import MainNavigation from "./shared/navigation/MainNavigation";
import Footer from "./shared/footer/Footer";
import ScrollButton from "./shared/UI/ScrollButton";
import ScrollToTop from './shared/util/ScrollToTop';

import Main from "./Main/page/Main";

import './App.css'
function App() {


  return (
    <div className="root-wrapper">

      <CartProvider>
        <BrowserRouter>
          <ScrollToTop>
            <MainNavigation />
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route exact path="*" element={<Main />} />
            </Routes>
            {/* <Footer /> */}
          </ScrollToTop>
          <ScrollButton />
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
