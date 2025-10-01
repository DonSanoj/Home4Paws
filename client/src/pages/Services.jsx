import React from "react";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <p className="text-lg text-gray-700 text-center mb-12">
        We provide innovative and customized solutions to help your business grow.
        Our team is dedicated to delivering excellence across every project.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="text-4xl mb-4">💻</div>
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Web Development</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            We build responsive, fast, and user-friendly websites tailored to your 
            business needs — from landing pages to full-scale platforms.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="text-4xl mb-4">📱</div>
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Mobile App Development</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Transform your ideas into powerful mobile experiences on Android and iOS 
            with our custom-built applications.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="text-4xl mb-4">⚙️</div>
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Backend & API Solutions</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Scalable and secure backend systems, APIs, and database solutions to power 
            your apps and digital products efficiently.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="text-4xl mb-4">🔍</div>
          <h2 className="text-xl font-semibold mb-3 text-blue-600">UI/UX Design</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            We craft beautiful, intuitive, and impactful user experiences that keep 
            customers engaged and coming back.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="text-4xl mb-4">☁️</div>
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Cloud & DevOps</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Optimize performance and scalability with our cloud deployment, 
            DevOps, and automation services.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="text-4xl mb-4">🤝</div>
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Consulting & Support</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our experts guide you through every stage of your digital journey — from 
            strategy and planning to deployment and support.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center text-gray-700">
        <p>
          Ready to start your next project?{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact our team
          </a>{" "}
          today and let’s bring your ideas to life.
        </p>
      </div>
    </div>
  );
};

export default Services;
