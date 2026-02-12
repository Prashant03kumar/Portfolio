import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission (e.g., EmailJS or Formspree)
    console.log("Form Submitted:", formData);
    alert("Thanks for reaching out, Jatin! I'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 min-h-screen bg-linear-to-br from-black via-gray-950 to-gray-800 bg-fixed"
    >
      <Navbar />
      <div className="mx-auto mt-16 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Get In <span className="text-indigo-500">Touch</span>
          </h2>
          <p className="text-gray-400 mt-2 italic text-sm">
            Have a question or want to work together?
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              {/* Email Input */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                required
                rows="5"
                placeholder="How can I help you?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
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
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
