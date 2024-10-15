import React from 'react'
import HomeHeader from './homeHeader';
import Footer from '../pages/footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return ( 
        <div>
          <header>
            <HomeHeader/>
          </header>
          <main>
            <Outlet/>
          </main>
          <footer>
       <Footer/>
          </footer>
        </div>
     );
}
 
export default Layout;