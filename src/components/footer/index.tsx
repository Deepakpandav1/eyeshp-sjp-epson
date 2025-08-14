import React from "react";
import { Link } from "@tanstack/react-router";
import { footerLinks } from "../../utils/appUtils/constant";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function FooterSection({ title, items }) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        {items.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.path}
              className="hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-cyan-950 text-white pt-10 pb-4 text-sm">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-5 gap-8">
        {/* Left Column */}
        <div className="col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/logo2.png"
              alt="Dr. Preeti's Bright Eye Care Hospital logo"
              className="w-170 h-70 bg-white rounded-2xl"
            />
          </div>
          <p className="text-white-400 text-sm mb-4 text-justify">
            "At Dr. Preeti’s Bright Eye Care Hospital, we believe that clear
            vision is not just about seeing the world—it’s about experiencing
            life to the fullest. With advanced technology, compassionate care,
            and a team dedicated to excellence, we strive to restore and protect
            the most precious gift you have—your sight. Whether it’s a routine
            check-up or complex surgery, your vision is in expert hands. Because
            every life deserves to see its brightest day, and every eye deserves
            the light of clarity. Choose Bright Eye Care—where your vision meets
            compassion and expertise."
          </p>
        </div>

        {/* Footer Sections: Quick Link, About Us, Services */}
        {Array.isArray(footerLinks.quickLinks) &&
          footerLinks.quickLinks.map((section, idx) => (
            <FooterSection
              key={idx}
              title={section.title}
              items={Array.isArray(section.submenu) ? section.submenu : []}
            />
          ))}
      </div>
      {/* Contact Info Column - Now placed inside the grid */}
      <div className="items-center text-center flex justify-center ml-48 mt-[-300px] mb-48">
        <div className="space-y-3 text-sm text-cyan-900 flex bg-white p-4 rounded-4xl flex-col font-bold">
          <h3 className="text-teal-400 text-3xl font-semibold mb-3">Contact</h3>
          <div className="flex gap-2">
            <FaPhoneAlt /> <span>{footerLinks.contact.phone}</span>
          </div>
          <div className="flex  gap-2">
            <FaEnvelope /> <span>{footerLinks.contact.email}</span>
          </div>
          <div className="flex  gap-2">
            <FaMapMarkerAlt />
            <div className="flex flex-col">
              <span className="text-left">{footerLinks.contact.address}</span>
              <span className="text-left">{footerLinks.contact.address1}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-700 mt-10 pt-4 px-6 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs gap-3">
        <div>
          © 2025{" "}
          <span className="text-teal-400 font-semibold">
            Dr. Preeti's Bright Eye Care Hospital
          </span>
          . All Rights Reserved.
        </div>

        <div className="flex items-center gap-2">
          {footerLinks.social.map((icon, idx) => {
            const IconComponent =
              icon === "facebook"
                ? FaFacebookF
                : icon === "twitter"
                ? FaTwitter
                : icon === "linkedin"
                ? FaLinkedinIn
                : icon === "whatsapp"
                ? FaWhatsapp
                : FaYoutube;

            return (
              <IconComponent
                key={idx}
                className="text-gray-400 hover:text-white cursor-pointer"
              />
            );
          })}
        </div>
      </div>

      {/* Emergency Block */}
      <div className="fixed bottom-20 right-6 bg-white text-[#14153B] p-4 rounded-xl shadow-md border-l-4 border-teal-500 w-64 flex items-start gap-3 z-50">
        <FaPhoneAlt className="text-teal-600 mt-1" />
        <div>
          <div className="text-sm text-teal-600 font-semibold">
            DAILY 24H EMERGENCY
          </div>
          <div className="text-md font-medium">
            {footerLinks.contact.emergency}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
