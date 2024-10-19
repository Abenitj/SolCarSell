import React, { useEffect, useState } from 'react'
import HomeHeader from './homeHeader';
import Footer from '../pages/footer';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header';
const Layout = () => {
  const [isHome, setisHome] = useState(null)
  const location=useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      setisHome(true)
      } else {
        setisHome(false)
        }
        }, [location]);
    return ( 
        <div>
          <header>
            {isHome?<HomeHeader/>:<Header/>}
          
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