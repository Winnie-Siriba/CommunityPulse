
// Base URL for the JSON server
const API_URL = 'http://localhost:3000';

// Fetch all reports
export const fetchReports = async () => {
  try {
    const response = await fetch(`${API_URL}/reports`);
    if (!response.ok) {
      throw new Error('Failed to fetch reports');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};

// Create a new report
export const createReport = async (reportData) => {
  try {
    const response = await fetch(`${API_URL}/reports`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...reportData,
        createdAt: new Date().toISOString(),
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to create report');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating report:', error);
    throw error;
  }
};

// Update a report
export const updateReport = async (id, updates) => {
  try {
    const response = await fetch(`${API_URL}/reports/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      throw new Error('Failed to update report');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating report:', error);
    throw error;
  }
};
