import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/contact.css";

const socialLinks = [
  // your social links here as in your code
];

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    if (!form.to_name.value.trim() || !form.email.value.trim() || !form.message.value.trim()) {
      toast.error("Please fill all fields!");
      setLoading(false);
      return;
    }

    const emailValid = /^\S+@\S+\.\S+$/.test(form.email.value);
    if (!emailValid) {
      toast.error("Please enter a valid email!");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_k7umpij",
        "template_8n6vhr8",
        formRef.current,
        "kqSoin5BRdqnD4B6L"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.reset();
          setLoading(false);
        },
        () => {
          toast.error("Failed to send. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" tabIndex={-1}>
      <h2 id="contact-heading">Contact Me</h2>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
        aria-describedby="contact-instructions"
        ref={formRef}
      >
        <p id="contact-instructions" className="instructions">
          Please fill out the form below or reach out via social media.
        </p>

        <label htmlFor="name-input">
          Name
          <input
            type="text"
            id="name-input"
            name="to_name"
            placeholder="Your name"
            required
            autoComplete="name"
            aria-required="true"
          />
        </label>

        <label htmlFor="email-input">
          Email
          <input
            type="email"
            id="email-input"
            name="email"
            placeholder="your.email@example.com"
            required
            autoComplete="email"
            aria-required="true"
          />
        </label>

        <label htmlFor="message-input">
          Message
          <textarea
            id="message-input"
            name="message"
            placeholder="Write your message here..."
            required
            aria-required="true"
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <nav className="social-icons" aria-label="Social media links">
        {socialLinks.map(({ name, href, svg }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Blessing Igwe's ${name} profile`}
          >
            {svg}
          </a>
        ))}
      </nav>

      <ToastContainer position="bottom-center" autoClose={4000} />
    </section>
  );
}