"use client";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_hbv3th6",
        "template_asy6tcb",
        e.target,
        "ZjidK8IB4opUnXmaY",
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          e.target.reset();
          setToast({ type: "success", message: "Message sent successfully!" });
          setTimeout(() => setToast(null), 3000);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setToast({ type: "error", message: "Failed to send message." });
          setTimeout(() => setToast(null), 3000);
        },
      );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/5 text-center">
      <h2 className="text-4xl font-bold text-green-600">Contact Me</h2>

      <form
        onSubmit={sendEmail}
        className="max-w-lg mx-auto mt-10 flex flex-col gap-4"
      >
        <input
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded-xl bg-black/40 border border-white/10"
        />

        <input
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded-xl bg-black/40 border border-white/10"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-3 rounded-xl bg-black/40 border border-white/10"
        />

        <Button
          type="submit"
          disabled={loading}
          className="bg-green-400 text-black hover:bg-green-300"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-6 right-6 px-6 py-4 rounded-xl shadow-lg flex items-center gap-3
        ${
          toast.type === "success"
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white"
        }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 size={20} />
            ) : (
              <XCircle size={20} />
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
