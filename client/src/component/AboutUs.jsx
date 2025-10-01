import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg text-gray-700 text-center mb-12">
        Welcome to <span className="font-semibold text-blue-600">Our Company</span> — 
        where passion meets innovation. We’re dedicated to delivering high-quality 
        solutions that make a real impact.
      </p>

      {/* About Content */}
      <div className="bg-white p-8 rounded-2xl shadow space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2020, our journey began with a small team of dreamers who
            wanted to create meaningful digital experiences. Over the years, we
            have grown into a trusted organization that values creativity, 
            collaboration, and excellence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to empower individuals and businesses with cutting-edge 
            technology and solutions that solve real-world problems. We believe 
            in continuous growth, integrity, and putting our users first.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">What We Do</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Provide top-notch software development services</li>
            <li>Build responsive and user-friendly web applications</li>
            <li>Offer professional support and maintenance</li>
            <li>Collaborate closely with clients to bring their ideas to life</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">🚀 Innovation</h3>
              <p className="text-gray-700 text-sm">
                We embrace change and strive to create unique solutions.
              </p>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">🤝 Integrity</h3>
              <p className="text-gray-700 text-sm">
                Honesty and transparency are the foundation of everything we do.
              </p>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">🌱 Growth</h3>
              <p className="text-gray-700 text-sm">
                We constantly learn, evolve, and improve as a team.
              </p>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">✨ Excellence</h3>
              <p className="text-gray-700 text-sm">
                We aim to deliver nothing but the best in all our work.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-gray-700">
        <p>
          Want to know more?{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            Get in touch with us
          </a>{" "}
          — we’d love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
