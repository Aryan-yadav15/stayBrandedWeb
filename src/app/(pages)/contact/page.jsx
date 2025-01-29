"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ChatBubbleOvalLeftIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { X } from "lucide-react";
import InfiniteCarousel from "@/app/_components/ui/InfiniteCarousel";

export default function ContactForm() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interests: [],
  });

  const services = [
    "UI/UX Design",
    "Website",
    "Brand Identity",
    "Content Production",
    "Illustration",
    "Other",
  ];

  const handleInterestToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(service)
        ? prev.interests.filter((i) => i !== service)
        : [...prev.interests, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

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
    <div className="">
      <div className="  bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div className="bg-gray-900  shadow-xl w-full relative overflow-hidden pt-16">
          <div className="flex flex-row gap-8">
            {/* Left Section */}
            <div className="p-8 flex-2 bg-gradient-to-b rounded-t-2xl from-[#adf700] via-[#f0ffb2] to-[#f6faed] text-gray-900  flex justify-between  flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-white rounded-full overflow-hidden ring-4 ring-white/20 hover:ring-[#CCFF00]/30 transition-all duration-300 group">
                  <div className="w-full h-full bg-gradient-to-br from-[#CCFF00] via-[#adf700] to-[#f0ffb2] flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-900/80 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-2xl">Andrew Hughes</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Project Coordinator
                  </p>
                  <p className="text-sm text-gray-600">
                    Can guide your project's initial steps
                  </p>
                </div>
              </div>

              <div className="">
                <h2 className="text-7xl leading-tight font-light mb-4">
                  Every project <br />{" "}
                  <span className=" text-gray-500">starts with a plan.</span>
                </h2>

                <div className="flex gap-4 mt-8">
                  <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">
                    andrew@cc.com
                  </button>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800">
                    Send Message
                  </button>
                </div>

                <div className="flex gap-4 mt-8">
                  {[
                    "facebook",
                    "instagram",
                    "linkedin",
                    "behance",
                    "twitter",
                  ].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="text-gray-900 hover:text-gray-800"
                    >
                      <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="p-8 flex-1 ">
              <h2 className="text-2xl text-white mb-6">
                What services we can support you with?
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <p className="text-gray-400 mb-3">I'm interested in</p>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleInterestToggle(service)}
                        className={`px-4 py-2 rounded-full border ${
                          formData.interests.includes(service)
                            ? "bg-[#CCFF00] text-gray-900 border-[#CCFF00]"
                            : "border-gray-600 text-gray-400 hover:border-[#CCFF00]"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-gray-600 p-2 text-white focus:border-[#CCFF00] outline-none"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-gray-600 p-2 text-white focus:border-[#CCFF00] outline-none"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-transparent border-b border-gray-600 p-2 text-white focus:border-[#CCFF00] outline-none"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full bg-transparent border-b border-gray-600 p-2 text-white focus:border-[#CCFF00] outline-none resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#CCFF00] text-gray-900 py-3 rounded mt-6 font-medium hover:bg-[#b3e600] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
