

import React from 'react';
import { NavLink } from 'react-router-dom';
// import Testpage from './page';
import Testpage from './Pagination';

function Users() {
  return (
    <>
      <section className="white">
        <section>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: 'red' } : { color: 'black' }
            }
            to="/user"
          >
            Users
          </NavLink>
          {/* <NavLink to="/NotFound">NoPage</NavLink> */}
        </section>
      </section>
      <div className="users-content">
        <h1>Random-User API</h1>
        <Testpage />
      </div>
    </>
  );
}

export default Users;




