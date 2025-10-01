import React from 'react';
import '../App.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Home4Paws</h1>
                    <p>Finding loving homes for our furry friends</p>
                    <button className="cta-button">Adopt Now</button>
                </div>
            </section>

            {/* Featured Pets Section */}
            <section className="featured-section">
                <h2>Featured Pets</h2>
                <div className="pets-grid">
                    {/* We'll add actual pet cards here later */}
                    <div className="pet-card">
                        <div className="pet-image placeholder"></div>
                        <h3>Luna</h3>
                        <p>2 years old • Female</p>
                    </div>
                    <div className="pet-card">
                        <div className="pet-image placeholder"></div>
                        <h3>Max</h3>
                        <p>1 year old • Male</p>
                    </div>
                    <div className="pet-card">
                        <div className="pet-image placeholder"></div>
                        <h3>Bella</h3>
                        <p>3 years old • Female</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-us-section">
                <h2>Why Choose Home4Paws?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <i className="feature-icon">❤️</i>
                        <h3>Caring Environment</h3>
                        <p>All our animals are cared for in loving foster homes</p>
                    </div>
                    <div className="feature-card">
                        <i className="feature-icon">🏠</i>
                        <h3>Perfect Match</h3>
                        <p>We ensure the best fit between pets and adopters</p>
                    </div>
                    <div className="feature-card">
                        <i className="feature-icon">🩺</i>
                        <h3>Health First</h3>
                        <p>All pets are vaccinated and health-checked</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section">
                <h2>Ready to Give a Pet a Forever Home?</h2>
                <p>Browse our available pets and find your perfect companion today!</p>
                <div className="cta-buttons">
                    <button className="cta-button">View Available Pets</button>
                    <button className="cta-button secondary">Learn About Adoption</button>
                </div>
            </section>
        </div>
    );
};

export default Home;