
import React, { useState, useEffect } from 'react';
import { fetchReports } from '../services/api';
import ReportList from '../components/ReportList';

const ResolvedReports = () => {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadReports = async () => {
      try {
        setIsLoading(true);
        const data = await fetchReports();
        // Filter for resolved reports only and sort by date (newest first)
        const resolvedReports = data
          .filter(report => report.resolved)
          .sort((a, b) => 
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        setReports(resolvedReports);
        setError(null);
      } catch (err) {
        setError('Failed to load resolved reports. Please try again later.');
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
        <h1 className="fw-bold">Resolved Community Issues</h1>
        <p className="text-muted">
          Celebrate the positive changes in your community! These issues have been successfully resolved.
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
      ) : reports.length === 0 ? (
        <div className="text-center py-5 bg-light rounded">
          <h3 className="fw-medium mb-2">No resolved reports yet</h3>
          <p className="text-muted mb-0">
            Issues will appear here once they've been marked as resolved.
          </p>
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

export default ResolvedReports;
