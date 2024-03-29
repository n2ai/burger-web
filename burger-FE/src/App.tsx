import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import './App.css'
import AboutPage from "./pages/AboutPage";
import ReservationPage from "./pages/ReservationPage";
import OnlineOrderPage from "./pages/OnlineOrderPage";
import { useState } from "react";
import PaymentPage from "./pages/PaymentPage";

interface IShoppingCart{
  name:string,
  price:number,
  imgUrl:string,
  count:number
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<HomePage/>}></Route>
      <Route path="about" element={<AboutPage/>}></Route>
      <Route path="/api/reservation" element={<ReservationPage/>}></Route>
      <Route path="/api/onlineOrder" element={<OnlineOrderPage/>}></Route>
      <Route path="/api/onlineOrder/payment" element={<PaymentPage/>}></Route>
      
    </Route>
  )
);



function App() {



  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
