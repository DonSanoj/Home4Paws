import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
      <p className="text-gray-700 text-center mb-12">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
      </p>

      <div className="bg-white p-8 rounded-2xl shadow space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect personal information such as your name, email address, phone number, and any other details you provide when you contact us or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use your information to respond to inquiries, provide services, improve our website, and communicate important updates. Your data is never sold to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">3. Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings, but some features may not work properly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">4. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We take reasonable steps to protect your information from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet is completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">5. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            You may request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us at{" "}
            <a href="mailto:support@example.com" className="text-blue-600 hover:underline">
              support@example.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">6. Updates to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised “Last Updated” date.
          </p>
        </section>
      </div>

      <p className="text-center text-gray-500 mt-8">Last Updated: October 1, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
