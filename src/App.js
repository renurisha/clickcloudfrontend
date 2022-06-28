import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { Header } from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/Cart";
import { Detailspage } from "./components/detailsPage/Detailspage";
import { Checkoutpage } from "./components/checkout/CheckoutPage";
import { Payment } from "./components/payment/Payment";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkoutpage />}></Route>
        <Route path="/payment" element={<Payment />}></Route>

        <Route path="/detailspage/:id" element={<Detailspage />}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
