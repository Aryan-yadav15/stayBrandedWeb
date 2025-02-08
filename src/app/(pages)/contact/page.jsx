"use client"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interests: [],
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const services = [
    "UI/UX Design",
    "Website",
    "Brand Identity",
    "Content Production",
    "Illustration",
    "Other",
  ]

  const handleInterestToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(service)
        ? prev.interests.filter((i) => i !== service)
        : [...prev.interests, service],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_8gmngld", // Replace with EmailJS service ID
        "template_2oet9ms",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          interests: formData.interests.join(", "),
        },
        "kpup8R1pV1mNd22sh"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text)
          setSuccess(true)
          setLoading(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            interests: [],
          })
        },
        (error) => {
          console.error("Error sending email:", error.text)
          setLoading(false)
        }
      )
  }

  return (
    <div className="flex items-center justify-center bg-gray-900 py-10">
      <div className="bg-gray-900 shadow-xl w-full max-w-6xl mx-4 md:mx-auto rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12">
          {/* Left Section */}
          <div className="p-6 md:p-8 bg-gradient-to-b from-[#adf700] via-[#f0ffb2] to-[#f6faed] text-gray-900 rounded-lg flex flex-col justify-between w-full md:w-2/5">
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Every project <br />
              <span className="text-gray-500">starts with a plan.</span>
            </h2>
            <div className="mt-6">
              <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800">
                connect@staybranded.in
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-6 md:p-8 w-full md:w-3/5">
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
                      className={`px-4 py-2 rounded-full border text-sm md:text-base ${
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
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
            {success && (
              <p className="text-green-500 mt-4">Your message has been sent successfully!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
