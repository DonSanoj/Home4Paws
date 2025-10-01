import React, { useState } from "react";

const ContactUs = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send form data to a backend API
        alert("Thank you for contacting us! We will get back to you soon.");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-lg text-gray-700 text-center mb-12">
                Have a question, suggestion, or feedback? We’d love to hear from you!
                Fill out the form below, and our team will get back to you as soon as
                possible.
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow space-y-6"
            >
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Your full name"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Your email address"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Write your message here..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>

            <div className="mt-12 text-center text-gray-700">
                <p>
                    Or reach us directly at{" "}
                    <a
                        href="mailto:support@example.com"
                        className="text-blue-600 hover:underline"
                    >
                        support@example.com
                    </a>
                </p>
                <p className="mt-2">Phone: (123) 456-7890</p>
            </div>
        </div>
    );
};

export default ContactUs;
