
import React from 'react';
import { updateReport } from '../services/api';

const ReportCard = ({ report, onReportUpdate }) => {
  const handleMarkResolved = async () => {
    try {
      const updatedReport = await updateReport(report.id, { resolved: true });
      onReportUpdate(updatedReport);
    } catch (error) {
      console.error('Failed to mark report as resolved:', error);
    }
  };
  
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`card shadow-sm h-100 ${report.resolved ? 'card-resolved' : 'card-pending'}`}>
      <div className="card-header d-flex justify-content-between align-items-start pb-2">
        <h5 className="card-title mb-0">{report.location}</h5>
        <span className={`badge ${report.resolved ? 'bg-success' : 'bg-warning'}`}>
          {report.resolved ? 'Resolved' : 'Pending'}
        </span>
      </div>
      
      <div className="card-body">
        <p className="text-muted small mb-2">
          {formatDate(report.createdAt)}
        </p>
        
        <span className="badge bg-light text-dark mb-2 d-inline-block">
          {report.category}
        </span>
        
        <p className="card-text mt-2">{report.description}</p>
        
        {report.imageUrl && (
          <img 
            src={report.imageUrl} 
            alt={`Image for ${report.location}`} 
            className="img-fluid rounded mt-3"
            style={{objectFit: "cover", height: "200px", width: "100%"}}
          />
        )}
      </div>
      
      <div className="card-footer bg-light">
        {!report.resolved ? (
          <button 
            onClick={handleMarkResolved}
            className="btn btn-primary w-100"
          >
            Mark as Resolved
          </button>
        ) : (
          <p className="text-success text-center mb-0">
            This issue has been resolved! 🎉
          </p>
        )}
      </div>
    </div>
  );
};

export default ReportCard;
