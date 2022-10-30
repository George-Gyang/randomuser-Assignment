import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="white">
        <section>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: 'red' } : { color: 'black' }
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/user">Users</NavLink>
          {/* <NavLink to="/Not Found">NoPage</NavLink> */}
        </section>
      </section>
      <div className="content">
        <h1>Home page</h1>
        <p>i am in the first page</p>
      </div>
    </>
  );
}

export default Home;
