import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./Navbar";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY2,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      alert(`Thanks for reaching out, ${formData.name}!`);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong!");
    }
  };

  // Dynamic Background Gradient
  const bgGradient = isDarkMode
    ? "from-black from-[70%] via-gray-600 via-[90%] to-white to-[100%]"
    : "from-white from-[70%] via-gray-400 via-[90%] to-black to-[100%]";

  return (
    <section
      id="contact"
      className={`py-20 px-6 min-h-screen bg-linear-to-br ${bgGradient} bg-fixed transition-colors duration-700`}
    >
      <Navbar />
      <div className="mx-auto mt-16 max-w-4xl">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold transition-colors duration-500 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Get In <span className={isDarkMode ? "text-white" : "text-black"}>Touch</span>
          </h2>
          <p
            className={`mt-2 italic text-sm transition-colors duration-500 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Have a question or want to work together?
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`backdrop-blur-md p-8 rounded-3xl border transition-all duration-500 shadow-2xl ${
            isDarkMode
              ? "bg-gray-800/40 border-gray-600/50 shadow-gray-900/50"
              : "bg-white/80 border-black/10 shadow-black/10"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  required
                  placeholder="Enter your name"
                  className={`w-full rounded-xl px-4 py-3 outline-hidden border transition-all ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 text-white focus:border-white"
                      : "bg-gray-50 border-black/20 text-black focus:border-black focus:bg-white"
                  }`}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              {/* Email Input */}
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  placeholder="Enter your email"
                  className={`w-full rounded-xl px-4 py-3 outline-hidden border transition-all ${
                    isDarkMode
                      ? "bg-white/5 border-white/10 text-white focus:border-white"
                      : "bg-gray-50 border-black/20 text-black focus:border-black focus:bg-white"
                  }`}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
              >
                Message
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                rows="5"
                placeholder="How can I help you?"
                className={`w-full rounded-xl px-4 py-3 outline-hidden border transition-all resize-none ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 text-white focus:border-white"
                    : "bg-gray-50 border-black/20 text-black focus:border-black focus:bg-white"
                }`}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={`w-full cursor-pointer font-bold py-4 rounded-xl shadow-lg transition-all ${
                isDarkMode
                  ? "bg-white text-black hover:bg-gray-200 shadow-white/20"
                  : "bg-black text-white hover:bg-gray-800 shadow-black/20"
              }`}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
