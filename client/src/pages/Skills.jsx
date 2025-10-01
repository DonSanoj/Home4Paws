import React from "react";

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>
      <p className="text-lg text-gray-700 text-center mb-12">
        Here are some of the technologies and skills I excel in, helping me deliver
        high-quality solutions and innovative projects.
      </p>

      {/* Skills Content */}
      <div className="bg-white p-8 rounded-2xl shadow space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Frontend Skills</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>React.js / Next.js</li>
            <li>HTML, CSS, Tailwind CSS</li>
            <li>JavaScript / TypeScript</li>
            <li>UI/UX Design & Responsive Layouts</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Backend Skills</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Node.js / Express.js</li>
            <li>Laravel / PHP</li>
            <li>Spring Boot / Java</li>
            <li>RESTful APIs & Database Design</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Database & Tools</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>PostgreSQL / MongoDB</li>
            <li>Git & GitHub / Version Control</li>
            <li>Docker / Deployment Tools</li>
            <li>CI/CD & Agile Workflow</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">🤝 Teamwork</h3>
              <p className="text-gray-700 text-sm">
                Collaborating effectively to achieve common goals.
              </p>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">🚀 Problem Solving</h3>
              <p className="text-gray-700 text-sm">
                Finding innovative solutions to complex challenges.
              </p>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">🌱 Continuous Learning</h3>
              <p className="text-gray-700 text-sm">
                Always improving and expanding my skill set.
              </p>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">✨ Communication</h3>
              <p className="text-gray-700 text-sm">
                Sharing ideas clearly and listening actively.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-gray-700">
        <p>
          Interested in collaborating?{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact me
          </a>{" "}
          — I’m always open to exciting projects!
        </p>
      </div>
    </div>
  );
};

export default Skills;
