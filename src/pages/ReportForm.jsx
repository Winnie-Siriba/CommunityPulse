
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createReport } from '../services/api';

const categories = [
  'Roads & Infrastructure',
  'Cleanliness',
  'Safety',
  'Environment',
  'Public Services',
  'Other'
];

const ReportForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    imageUrl: '',
    category: '',
    resolved: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.location || !formData.description || !formData.category) {
      setError('Please fill in all required fields');
      return;
    }
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      await createReport(formData);
      
      // Reset form after successful submission
      setFormData({
        location: '',
        description: '',
        imageUrl: '',
        category: '',
        resolved: false
      });
      
      // Navigate to all reports page to see the new report
      navigate('/all-reports');
      
    } catch (err) {
      setError('Failed to submit report. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h1 className="card-title text-center mb-4">Report a Community Issue</h1>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">Location <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="E.g., Corner of Main St and 5th Ave"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description <span className="text-danger">*</span></label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Please describe the issue..."
                    required
                  ></textarea>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">Image URL (optional)</label>
                  <input
                    type="url"
                    className="form-control"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                  />
                  <div className="form-text">Add a URL to an image that shows the issue</div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="category" className="form-label">Category <span className="text-danger">*</span></label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : 'Submit Report'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
