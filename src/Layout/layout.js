import React from 'react';
import Header from '../Component/Headerss/Headerss';
import Router from '../Component/Router/Router';
import Footer from '../Component/Footer/footer';


const Layout = () => {
  return (
  <>
        <Header/>
    <div>
         <Router/>
    </div>
        <Footer/>
  </>)
}

export default Layout;
