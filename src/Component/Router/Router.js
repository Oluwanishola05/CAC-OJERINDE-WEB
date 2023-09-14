import React from 'react';
import Home from '../Header/Pages/Home';
import CurrentLeader from '../Header/Pages/CurrentLeader';
import Gallery from '../Header/Pages/Gallery';
import Department from '../Header/Pages/Department';
import AboutUs from '../Header/Pages/AboutUs';
import Children from '../Header/Pages/ChurchDepartments/Children';
import Usher from '../Header/Pages/ChurchDepartments/Usher';
import Media from '../Header/Pages/ChurchDepartments/Media';
import Choir from '../Header/Pages/ChurchDepartments/Choir';
import SundaySchool from '../Header/Pages/ChurchDepartments/SundaySchool';
import RoyalShepard from '../Header/Pages/ChurchDepartments/RoyalShepard';
import Youth from '../Header/Pages/ChurchDepartments/Youth';

import { Route, Routes, Navigate } from 'react-router-dom';


const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/currentLeader' element={<CurrentLeader/>} />
        <Route path='gallery' element={<Gallery/>} />
        <Route path='aboutUs' element={<AboutUs/>} />
        <Route path='department' element={<Department/>} />
        <Route path='media' element={<Media/>} />
        <Route path='choir' element={<Choir/>} />
        <Route path='sundaySchool' element={<SundaySchool/>} />
        <Route path='usher' element={<Usher/>} />
        <Route path='royalShepard' element={<RoyalShepard/>} />
        <Route path='children' element={<Children/>} />
        <Route path='youth' element={<Youth/>} />
    </Routes>
  )
}

export default Router;
