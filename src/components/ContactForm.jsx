import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1ny5vl6",        // ✅ YOUR SERVICE ID
      "template_1n6cye7",       // ✅ YOUR TEMPLATE ID
      formRef.current,
      "WUl683JZDdVnpjkia"       // ✅ YOUR PUBLIC KEY
    )
    .then((result) => {
      console.log("SUCCESS:", result.text);
      alert("Message sent successfully 🚀");

      setForm({
        name: "",
        contact: "",
        service: "",
        message: ""
      });
    })
    .catch((error) => {
      console.log("ERROR:", error);
      alert("Error sending ❌");
    });
  };

  return (
    <div className="bg-black-gradient p-6 rounded-xl w-full max-w-[400px]">
      <h2 className="text-white text-xl font-semibold mb-4">
        Client Inquiry Form
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white outline-none"
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact (Email / Phone)"
          value={form.contact}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white outline-none"
          required
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white outline-none"
          required
        >
          <option value="">Select Service</option>
          <option>Static Web Pages</option>
          <option>Fullstack Website</option>
          <option>IT Service</option>
        </select>

        <textarea
          name="message"
          placeholder="Project Info"
          value={form.message}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white outline-none"
          rows="4"
          required
        />

        <button
          type="submit"
          className="bg-blue-gradient text-black font-semibold py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;