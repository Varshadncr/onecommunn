import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';  // Import the AboutSection
import ServicesSection from './components/ServicesSection';
import RecentProjectsSection from './components/RecentProjectsSection';
import HowWeWork from './components/HowWeWork';
import ClientFeedback from './components/ClientFeedback';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';  // Import the ServicesSection
import 'font-awesome/css/font-awesome.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <HeroSection />
      <AboutSection />  {/* Add AboutSection here */}
      <ServicesSection />  
      <RecentProjectsSection/>
      <HowWeWork/>
      <ClientFeedback/>
      <ContactUs/>
      <Footer/>{/* Add ServicesSection here */}
    </div>
  );
};

export default App;
