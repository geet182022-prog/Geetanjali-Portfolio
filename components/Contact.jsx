"use client";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.target,
      "YOUR_PUBLIC_KEY"
    );

    alert("Message Sent!");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/5 text-center">
      <h2 className="text-4xl font-bold text-green-600">
        Contact Me
      </h2>

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

        <Button className="bg-green-400 text-black hover:bg-green-300">
          Send Message
        </Button>
      </form>
    </section>
  );
}
