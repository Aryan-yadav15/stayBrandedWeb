"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  ChatBubbleOvalLeftIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="bg-gray-900  p-8 md:p-12 flex items-center justify-center  mx-auto">
      <div className="grid md:grid-cols-2 gap-12 mt-20 ">
        {/* Left Column - Form */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <div className="relative">
              <div className="absolute h-5 w-5 animate-ping bg-emerald-400 rounded-full" />
              <div className="h-5 w-5 bg-emerald-600 rounded-full" />
            </div>
            <h2 className="text-4xl font-bold text-white">
              Contact Our Team
            </h2>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white"
                placeholder="Leave us a message..."
                required
              />
            </div>
            <div>
              <label className="block text-2xl font-bold text-gray-100 mb-4">
                Services Needed
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Website design",
                  "Content creation",
                  "UX design",
                  "Strategy & consulting",
                  "User research",
                  "Other",
                ].map((service, index) => (
                  <label key={index} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      className="w-5 h-5 text-emerald-600 border-gray-700 rounded focus:ring-emerald-500 bg-gray-800"
                    />
                    <span className="text-gray-300">{service}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <ChatBubbleOvalLeftIcon className="h-6 w-6 text-emerald-400" />
              <h3 className="text-xl font-semibold text-white">
                Chat with us
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Speak to our friendly team via live chat
            </p>
            <div className="space-y-2">
              <button className="text-emerald-400 hover:text-emerald-300 flex items-center space-x-2">
                <span>Start a live chat</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
              <button className="text-emerald-400 hover:text-emerald-300 flex items-center space-x-2">
                <span>Shoot us an email</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <PhoneIcon className="h-6 w-6 text-emerald-400" />
              <h3 className="text-xl font-semibold text-white">Call us</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Available Mon-Fri from 8am to 5pm
            </p>
            <a
              href="tel:+15550000000"
              className="text-emerald-400 hover:text-emerald-300"
            >
              +1 (555) 000-0000
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <MapPinIcon className="h-6 w-6 text-emerald-400" />
              <h3 className="text-xl font-semibold text-white">Visit us</h3>
            </div>
            <p className="text-gray-400">
              100 Smith Street,
              <br />
              Collingwood VIC 3066
              <br />
              Australia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}