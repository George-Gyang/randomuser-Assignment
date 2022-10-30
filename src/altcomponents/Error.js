import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <section className="white">
        <NavLink to="/">Back</NavLink>

      </section>
      <hr />
      <h1>404 Error page Not Found</h1>
    </>
  );
};

export default ErrorPage;
