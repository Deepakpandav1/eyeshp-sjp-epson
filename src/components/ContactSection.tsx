// src/components/ContactSection.tsx

import React from "react";
import { contactInfo } from "../utils/appUtils/constant";

const ContactSection: React.FC = () => {
  return (
    <section className="  py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">📍 Location</h2>

      {/* Google Map */}
      <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.5281002304146!2d75.59315747624416!3d32.27077680968403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c79b8206d5865%3A0x28c9bd5c3b140d53!2sDr%20Preeti&#39;s%20Bright%20Eye%20Care!5e0!3m2!1sen!2sin!4v1753252141504!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
