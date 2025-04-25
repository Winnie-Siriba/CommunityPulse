
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReportForm from './pages/ReportForm';
import AllReports from './pages/AllReports';
import ResolvedReports from './pages/ResolvedReports';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/all-reports" element={<AllReports />} />
          <Route path="/resolved" element={<ResolvedReports />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
