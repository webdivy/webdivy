import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import AboutUsPage from './pages/About_us.js';
import ContactUsPage from './pages/Contact_us.js';
import _404Page from './pages/404.js';
import PrivacyPolicyPage from './pages/Privacy_policy.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/aboutus" element={<AboutUsPage />} />
         
      <Route path="/contactus" element={<ContactUsPage />} />
         
      <Route path="/404" element={<_404Page />} />
         
      <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
    </Routes>
  );
}

export default App;
