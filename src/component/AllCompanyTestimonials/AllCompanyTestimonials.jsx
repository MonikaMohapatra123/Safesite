
import React, { useState, useEffect } from 'react';
import './AllCompanyTestimonials.css';
import DynamicButton from '../DynamicButton/DynamicButton'; // update path as per your folder structure


export default function AllCompanyTestimonials({ data }) {
  const testimonials = Object.values(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className='testimonials'>
      <h2>Loved by Industry Leaders Worldwide</h2>

      <div className="carousel-wrapper">
        <div className="image-wrapper">
          <button className="nav-btn prev-btn" onClick={goToPrevious}>
            &#10094;
          </button>
          <img
            src={currentTestimonial.image}
            alt="testimonial"
            className="main-image"
          />
        </div>

        <div className="carousel-container">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div className="testimonial-card" key={item.id}>
                <div className="testimonial-left">
                  <div className="testimonial-text">
                    <span className="quote-icon">“</span>
                    <p className="quote">{item.quote}</p>
                    <p className="name">— {item.name}</p>
                    <p className="title">{item.title}</p>
                  </div>
                </div>
                <div className="testimonial-right">
                  <div className="stat-icon">⬇</div>
                  <div className="stat">{item.stats}</div>
                  <div className="description">{item.description}</div>
                  <hr className="stat-divider" />
                </div>

                {/* ✅ Mobile hover logo for this card */}
                {currentIndex === index && (
                  <img
                    src={item.hoverImageColor}
                    alt={item.name}
                    className="mobile-hover-logo"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn next-btn" onClick={goToNext}>
          &#10095;
        </button>
      </div>

     <div className="hover-logos-row">
  {testimonials.map((item, index) => (
    <img
      key={item.id}
      src={
        currentIndex === index
          ? item.hoverImageColor
          : item.hoverImageDefault
      }
      alt={item.name}
      className="hover-logo-img"
      style={{ cursor: "pointer" }} // optional for better indication
      onClick={() => setCurrentIndex(index)}
    />
  ))}
</div>
<div className="button-center">
  <DynamicButton label="View All CaseStudies" route="/case-studies" />
</div>


    </div>
  );
}

