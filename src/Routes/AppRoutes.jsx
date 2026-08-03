import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from '../Pages/Home/Home';
import EatAndDrink from '../Pages/EatAndDrink/EatAndDrink';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/eat-and-drink" element={<EatAndDrink/>} />
        </Route>
    )
)

const AppRoutes = () => {
    return (
        <div><RouterProvider router={router} /></div>
    )
}

export default AppRoutes