// Contact.jsx
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";

// scroll-to-top helper
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// reveal variant (used locally, replayable)
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ text: "", type: "" }); // shown only on submit

  // validation: name + valid email + message required
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // clear inline errors when section is NOT in view (user scrolled away)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && Object.keys(errors).length > 0) {
          setErrors({});
        }
      },
      { threshold: 0.05 } // small threshold: considered "out" quickly
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [errors]);

  // also clear errors as user types for a better UX
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // submit handler (uses emailjs.send)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    // Ensure your template in EmailJS expects these param names.
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSnackbar({ text: "✅ Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", phone: "", address: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setSnackbar({ text: "❌ Failed to send. Try again.", type: "error" });
    } finally {
      setLoading(false);
      // hide snackbar after 4s
      setTimeout(() => setSnackbar({ text: "", type: "" }), 4000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative mb-28 px-6 py-16 text-white"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }} // replay every time
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 p-10 rounded-3xl
                   backdrop-blur-md bg-white/5 border border-white/20
                   shadow-[0_8px_32px_rgba(0,0,0,0.7)] transition-transform duration-300"
      >
        {/* Left: Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">Let's Connect</h2>
          <p className="text-gray-300">
            Eagerly looking forward to hearing from you — send a message and I’ll
            get back as soon as I can.
          </p>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <Mail size={18} /> kardhananjay9@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone size={18} /> +91 9905100643
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={18} /> Jamshedpur, Jharkhand, India - 831019
            </p>
          </div>

          <div className="flex gap-6 mt-6">
            <a href="https://github.com/DhananjayKar" target="_blank" rel="noreferrer">
              <Github size={26} className="hover:text-cyan-400 hover:drop-shadow-[0_4px_6px_rgba(64,224,208,0.5)]" />
            </a>
            <a href="https://www.instagram.com/kardhananjay9/?igsh=YzljYTk1ODg3Zg%3D%3D#" target="_blank" rel="noreferrer">
              <Instagram size={26} className="hover:text-cyan-400 hover:drop-shadow-[0_4px_6px_rgba(64,224,208,0.5)]" />
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["name", "email"].map((field) => (
              <motion.div
                key={field}
                animate={errors[field] ? { x: [-6, 6, -4, 4, 0] } : {}}
                transition={{ duration: 0.35 }}
              >
                <input
                  name={field === "email" ? "email" : "name"}
                  type={field === "email" ? "email" : "text"}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors[field] ? "border-red-500" : "border-white/20"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-300`}
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={errors.message ? { x: [-6, 6, -4, 4, 0] } : {}}
            transition={{ duration: 0.35 }}
          >
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/10 border ${
                errors.message ? "border-red-500" : "border-white/20"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-300`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </motion.div>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-lg font-semibold text-white
                       bg-gradient-to-r from-cyan-200/30 via-teal-200/30 to-cyan-600/30
                       backdrop-blur-xl border border-white/20 shadow-lg
                       hover:from-cyan-400/50 hover:via-teal-400/50 hover:to-cyan-600/50
                       transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </motion.form>
      </motion.div>

      {/* Snackbar (submit-only) */}
      {snackbar.text && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed top-6 right-6 px-5 py-3 rounded-full text-sm shadow-lg
                      ${snackbar.type === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"}`}
        >
          {snackbar.text}
        </div>
      )}
    </section>
  );
}
