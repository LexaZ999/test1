import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Feedback from './components/Feedback.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Userbar from './components/Userbar.jsx';
import AccelerationPrograms from './pages/AccelerationPrograms.jsx';
import Internships from './pages/Internships.jsx';
import MyProfile from './pages/MyProfile.jsx';
import NotFound from './pages/NotFound.jsx';
import Testing from './pages/Testing.jsx';

const App = () => (
  <HashRouter>
    <Header />
    <Userbar />
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="my-profile" element={<MyProfile />} />
      <Route path="company-for-internship" element={<Internships />} />
      <Route path="acceleration-programs" element={<AccelerationPrograms />} />
      <Route path="testing" element={<Testing />} />
    </Routes>
    <Feedback />
    <Footer />
  </HashRouter>
);

export default App;
