
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Hero Section */}
      <section className="bg-primary bg-gradient text-white py-5">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-4">Make Your Community Better, Together</h1>
          <p className="lead fs-4 mb-4">
            Community Plus helps you report local issues that need attention,
            track their progress, and celebrate positive changes.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/report" className="btn btn-light btn-lg text-primary">
              Report an Issue
            </Link>
            <Link to="/all-reports" className="btn btn-outline-light btn-lg">
              View Reports
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">How It Works</h2>
          
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: "64px", height: "64px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pencil-square text-primary" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
              </div>
              <h3 className="h5 fw-semibold mb-2">Submit Reports</h3>
              <p className="text-muted">
                Easily report issues in your community that need attention.
              </p>
            </div>
            
            <div className="col-md-4 text-center">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: "64px", height: "64px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-clipboard-check text-primary" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3 0h3z"/>
                </svg>
              </div>
              <h3 className="h5 fw-semibold mb-2">Track Progress</h3>
              <p className="text-muted">
                Follow along as community issues are addressed and resolved.
              </p>
            </div>
            
            <div className="col-md-4 text-center">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: "64px", height: "64px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check-circle text-primary" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                </svg>
              </div>
              <h3 className="h5 fw-semibold mb-2">Celebrate Wins</h3>
              <p className="text-muted">
                See what's been fixed and celebrate positive changes in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Make a Difference?</h2>
          <p className="lead text-muted mb-4">
            Join your neighbors in making your community a better place through positive reporting and collaboration.
          </p>
          <Link to="/report" className="btn btn-primary btn-lg">
            Submit Your First Report
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
