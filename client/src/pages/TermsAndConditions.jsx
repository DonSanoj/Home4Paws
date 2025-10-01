import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Terms & Conditions
      </h1>
      <p className="text-gray-700 text-center mb-12">
        Please read these Terms and Conditions carefully before using our
        website.
      </p>

      <div className="bg-white p-8 rounded-2xl shadow space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using Home4Paws, you agree to be bound by these
            Terms and all applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            2. Use of the Site
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to use the site only for lawful purposes and in a way that
            does not infringe the rights of others or inhibit their use and
            enjoyment of the site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            3. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content, features and functionality on the site, including text,
            graphics, logos, and images, are the property of Home4Paws or its
            licensors and are protected by intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            4. Disclaimers and Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The site is provided "as is" without warranties of any kind. To the
            fullest extent permitted by law, Home4Paws is not liable for any
            indirect, incidental, or consequential damages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            5. Changes to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms from time to time. Continued use of the
            site after changes indicates your acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            6. Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about these Terms, contact us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:underline"
            >
              support@example.com
            </a>
            .
          </p>
        </section>
      </div>

      <p className="text-center text-gray-500 mt-8">
        Last Updated: October 1, 2025
      </p>
    </div>
  );
};

export default TermsAndConditions;
