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
    const response = await fetch(import.meta.env.VITE_WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
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
    ? "from-black via-gray-950 to-gray-800"
    : "from-white via-cyan-50 to-cyan-400";

  return (
    <section
      id="contact"
      className={`py-20 px-6 min-h-screen bg-linear-to-br ${bgGradient} bg-fixed transition-colors duration-700`}
    >
      <Navbar />
      <div className="mx-auto mt-16 max-w-4xl">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold transition-colors duration-500 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Get In <span className="text-indigo-500">Touch</span>
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
              ? "bg-gray-900/40 border-white/5 shadow-black/60"
              : "bg-white/80 border-cyan-200 shadow-cyan-200/50"
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
                      ? "bg-white/5 border-white/10 text-white focus:border-indigo-500"
                      : "bg-gray-50 border-cyan-200 text-gray-900 focus:border-indigo-500 focus:bg-white"
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
                      ? "bg-white/5 border-white/10 text-white focus:border-indigo-500"
                      : "bg-gray-50 border-cyan-200 text-gray-900 focus:border-indigo-500 focus:bg-white"
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
                    ? "bg-white/5 border-white/10 text-white focus:border-indigo-500"
                    : "bg-gray-50 border-cyan-200 text-gray-900 focus:border-indigo-500 focus:bg-white"
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
              className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
