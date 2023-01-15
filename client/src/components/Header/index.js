import React from 'react';
import NavTop from '../Navbar'; 
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
          <NavTop></NavTop>
    // <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
    //   <div className="container flex-row justify-space-between-lg justify-center align-center">
    //     <div>
    //       {/* <Link className="text-light" to="/">
    //         <h1 className="m-0">Lunch Date</h1>
    //       </Link> */}
    //       {/* <p className="m-0">Lunch brought to you with ❤️.</p> */}
    //     </div>
    //     <div>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
