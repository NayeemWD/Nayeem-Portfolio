import React, { useState, useEffect } from "react";
import {
  FiFacebook,
  FiLinkedin,
  FiGithub,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState(null); // For showing alert

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_5jc251r", // EmailJS service ID
        "template_n2qefzj", // EmailJS template ID
        formData,
        "oyplEiOGy7obUXjPb" // EmailJS user ID
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setAlertMessage({
            type: "success",
            text: "Message sent successfully!",
          });
          setFormData({ name: "", email: "", message: "" }); // Reset form
          setTimeout(() => setAlertMessage(null), 3000); // Hide alert after 3 seconds
        },
        (error) => {
          console.error("Failed to send email:", error);
          setAlertMessage({
            type: "error",
            text: "Failed to send message. Please try again.",
          });
          setTimeout(() => setAlertMessage(null), 3000); // Hide alert after 3 seconds
        }
      );
  };

  return (
    <section
      id="contact"
      className="pt-8 sm:pt-12 pb-12 sm:pb-16 c-bg c-shadow rounded-2xl mt-10 sm:mt-20 mb-10 sm:mb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Get in Touch
          </h2>
        </div>

        {/* Show Alert Message */}
        {alertMessage && (
          <div
            className={`toast toast-top toast-center z-50 ${
              alertMessage.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}>
            <div
              className={`alert ${
                alertMessage.type === "success"
                  ? "alert-success"
                  : "alert-error"
              }`}>
              {alertMessage.type === "success" ? (
                <FiSend size={24} className="mr-3" />
              ) : (
                <FiMail size={24} className="mr-3" />
              )}
              <span>{alertMessage.text}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 justify-center items-start">
          {/* Contact Info Card */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border w-full">
            <div className="mb-4 text-center">
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Contact Info
              </h4>
            </div>
            <div className="border-b pb-3 sm:pb-4 mb-3 sm:mb-4 flex items-start sm:items-center gap-3">
              <FiMapPin
                size={20}
                className="text-blue-500 flex-shrink-0 mt-1 sm:mt-0"
              />
              <p className="text-sm sm:text-base text-gray-600">
                Kanchpur, Sonagroan, Narayangonj,Dhaka, Bangladesh
              </p>
            </div>
            <div className="border-b pb-3 sm:pb-4 mb-3 sm:mb-4 flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center gap-3">
                <FiPhone size={20} className="text-blue-500 flex-shrink-0" />
                <a
                  href="tel:+8801643547750"
                  className="text-blue-500 hover:underline text-sm sm:text-base">
                  +88 01643-547750
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail size={20} className="text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:msnayeem333@gmail.com"
                  className="text-blue-500 hover:underline text-sm sm:text-base break-all">
                  msnayeem333@gmail.com
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/m-s-nayeem/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/msnayeem111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a
                href="https://github.com/NayeemWD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors">
                <FiGithub size={20} />
              </a>
              <a
                href="https://discord.com/users/1208416710688772098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors">
                <FaDiscord size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-3 sm:gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  rows="4"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all text-sm sm:text-base font-medium">
                  <span>Send Message</span>
                  <FiSend size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
