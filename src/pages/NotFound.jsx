
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="container py-5 my-5 text-center">
      <h1 className="display-1 fw-bold mb-4">404</h1>
      <p className="fs-4 text-muted mb-4">Oops! Page not found</p>
      <a href="/" className="btn btn-primary">
        Return to Home
      </a>
    </div>
  );
};

export default NotFound;
