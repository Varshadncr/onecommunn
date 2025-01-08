import React from 'react';
import '../styles/servicessection.css';  // Import custom CSS

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: 'https://res.cloudinary.com/da41qeo0g/image/upload/v1736322280/hook_xkcfci.png',
      title: 'Building Materials',
      description: 'United Builders Pvt. Ltd. is a company that supplies building materials for your projects.',
    },
    {
      icon: 'https://res.cloudinary.com/da41qeo0g/image/upload/v1736322279/maintenance_rxm2i1.png',
      title: 'Joint Ventures',
      description: 'United Builders Pvt. Ltd. is involved in joint ventures for large-scale projects.',
    },
    {
      icon: 'https://res.cloudinary.com/da41qeo0g/image/upload/v1736322278/Page-1_kcvo3d.png',
      title: 'RERA Consultants',
      description: 'We provide RERA consultancy services to ensure legal compliance for your projects.',
    },
    {
      icon: 'https://res.cloudinary.com/da41qeo0g/image/upload/v1736322273/excavator_lwdcfq.png',
      title: '2D & 3D Consultant',
      description: 'Designing buildings with a structural framework for more efficient designs.',
    },
    {
      icon: 'https://res.cloudinary.com/da41qeo0g/image/upload/v1736322274/flasks_bphcoe.png',
      title: 'Construction & Interior',
      description: 'Providing professional construction and interior design services for residential and commercial spaces.',
    },
    {
      icon: 'https://res.cloudinary.com/da41qeo0g/image/upload/v1736322275/car-repair_rmaeq6.png',
      title: 'Land Development',
      description: 'Helping with land development and zoning processes for your project locations.',
    },
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {/* Use the Cloudinary URL directly */}
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="btn">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
