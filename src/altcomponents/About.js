import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <>
      <section className="white">
        <section>
          <NavLink to="/">Home</NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: 'red' } : { color: 'black' }
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink to="/user">Users</NavLink>

          {/* <NavLink to="/Not Found">NoPage</NavLink> */}
        </section>
      </section>
      <div className='content'>

      <h1>About page</h1>
      <p>i am in the seconday page</p>
      </div>
    </>
  );
}

export default About;
