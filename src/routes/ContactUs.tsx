import React, { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/drpreetisbrighteyecare@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccessMessage(
          "✅ Your query has been submitted. We will get back to you ASAP."
        );
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch {
      alert("❌ Network error. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <div className="bg-[url('/bg-100-vh.jpg')] bg-fixed py-60">
      <div className="max-w-4xl mx-auto my-2.5 p-10 bg-white rounded-3xl shadow-xl">
        <h1 className="text-2xl font-bold text-teal-800 text-center mb-6">
          Contact Us
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center m-2.5">
          <div className="border-2 rounded-4xl bg-cyan-900 text-white font-bold text-lg p-5 text-center break-words">
            +91 62395 07877
          </div>
          <div className="border-2 rounded-4xl bg-cyan-900 text-white font-bold text-lg p-5 text-center break-words">
            drpreetisbrighteyecare@gmail.com
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            onChange={handleChange}
            value={formData.name}
            placeholder="Full Name"
            className="w-full p-2 border rounded"
          />

          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
            placeholder="Email Address"
            className="w-full p-2 border rounded"
          />

          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            placeholder="Phone Number"
            className="w-full p-2 border rounded"
          />

          <textarea
            name="message"
            required
            onChange={handleChange}
            value={formData.message}
            placeholder="Your Message"
            rows={4}
            className="w-full p-2 border rounded"
          />

          <button
            disabled={submitting}
            type="submit"
            className="w-full bg-teal-700 text-white p-3 rounded hover:bg-teal-900"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {successMessage && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
