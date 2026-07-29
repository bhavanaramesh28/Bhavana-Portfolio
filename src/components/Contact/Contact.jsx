import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setSuccess("✅ Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <p className="contact-text">
          Have a project or just want to say hello? Feel free to send me a
          message.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {success && <p className="success">{success}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;