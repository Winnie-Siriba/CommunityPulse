
import React, { useState, useEffect } from 'react';
import ReportCard from './ReportCard';

const ReportList = ({ reports, onReportUpdate, showFilters = true }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  
  const [filteredReports, setFilteredReports] = useState(reports);
  
  // Extract unique categories from reports
  const categories = [...new Set(reports.map(report => report.category))];
  
  // Filter reports based on search term and category
  useEffect(() => {
    let filtered = [...reports];
    
    if (searchTerm) {
      filtered = filtered.filter(report => 
        report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (categoryFilter) {
      filtered = filtered.filter(report => report.category === categoryFilter);
    }
    
    setFilteredReports(filtered);
  }, [reports, searchTerm, categoryFilter]);

  return (
    <div>
      {showFilters && (
        <div className="mb-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by location or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <select 
              className="form-select"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      
      {filteredReports.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-muted">No reports found.</p>
        </div>
      ) : (
        <div className="row g-4">
          {filteredReports.map(report => (
            <div key={report.id} className="col-md-6 col-lg-4">
              <ReportCard 
                report={report} 
                onReportUpdate={onReportUpdate} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReportList;
