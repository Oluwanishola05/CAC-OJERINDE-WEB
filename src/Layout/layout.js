import React from 'react';

import Router from '../Component/Router/Router';
import Footer from '../Component/Footer/footer';
import Header2 from '../Component/Headerss/header2';


const Layout = () => {
  return (
  <>
        <Header2/>
    <div>
         <Router/>
    </div>
        <Footer/>
  </>)
}

export default Layout;
