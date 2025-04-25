
import React, { useState, useEffect } from 'react';
import { fetchReports } from '../services/api';
import ReportList from '../components/ReportList';

const AllReports = () => {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadReports = async () => {
      try {
        setIsLoading(true);
        const data = await fetchReports();
        // Sort reports by date (newest first)
        const sortedReports = data.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setReports(sortedReports);
        setError(null);
      } catch (err) {
        setError('Failed to load reports. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadReports();
  }, []);
  
  const handleReportUpdate = (updatedReport) => {
    setReports(prevReports => 
      prevReports.map(report => 
        report.id === updatedReport.id ? updatedReport : report
      )
    );
  };

  return (
    <div className="container py-5">
      <div className="mb-4">
        <h1 className="fw-bold">All Community Reports</h1>
        <p className="text-muted">
          Browse all submitted reports in your community
        </p>
      </div>
      
      {isLoading ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="text-center py-4">
          <p className="text-danger">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn btn-primary mt-3"
          >
            Try Again
          </button>
        </div>
      ) : (
        <ReportList 
          reports={reports}
          onReportUpdate={handleReportUpdate}
          showFilters={true}
        />
      )}
    </div>
  );
};

export default AllReports;
