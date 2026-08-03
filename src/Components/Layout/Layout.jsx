import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import DividingLine from '../Dividing_line/DividingLine';


const Layout = () => {
    return (
        <div>
            <Navbar />
            <DividingLine height="20px" />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout