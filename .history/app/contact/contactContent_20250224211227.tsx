"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactContent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State untuk menampilkan pesan sukses atau error
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset pesan alert terlebih dahulu
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      // Contoh panggilan ke backend NestJS:
      // const res = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // if (res.ok) {
      //   setSuccessMessage('Thank you for your message. We will get back to you soon.');
      //   // Reset form
      //   setFormData({ name: '', email: '', subject: '', message: '' });
      // } else {
      //   setErrorMessage('Something went wrong. Please try again.');
      // }

      // Untuk demo, kita anggap selalu sukses
      setSuccessMessage(
        "Thank you for your message. We will get back to you soon."
      );
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setErrorMessage(
        "Error occurred while submitting the form. Please try again later."
      );
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white py-16">
      <div className="container">
        {/* Bagian Judul Utama */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em]">
            CONTACT US
          </h4>
          <h3 className="text-3xl md:text-4xl font-bold">
            Reach out for a new project
          </h3>
        </div>

        {/* Grid Utama: Form (kiri) dan Info Kontak (kanan) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bagian Kiri: Form */}
          <div className="p-8 bg-gray-100 dark:bg-gray-700 rounded">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            {/* Alert messages */}
            {successMessage && (
              <div className="mb-4 rounded bg-green-500 p-4 text-white">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="mb-4 rounded bg-red-500 p-4 text-white">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-200 dark:bg-gray-600 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-500 ease-in-out"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-200 dark:bg-gray-600 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-500 ease-in-out"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-200 dark:bg-gray-600 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-500 ease-in-out"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-200 dark:bg-gray-600 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-500 ease-in-out"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          {/* Bagian Kanan: Info Kontak */}
          <div className="p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-6">
              <li>
                <h4 className="text-sm uppercase font-bold mb-1">
                  Where to Find Us
                </h4>
                <p className="dark:text-gray-400 text-gray-700 transition duration-500 ease-in-out">
                  Jl. SMA 14 No. 47 B Kel. Cililitan,
                  <br />
                  Kec. Keramat Jati, Jakarta Timur
                  <br />
                  Indonesia
                </p>
              </li>
              <li>
                <h4 className="text-sm uppercase font-bold mb-1">
                  Email Us At
                </h4>
                <a
                  href="mailto:info@mulse.id"
                  target="_blank"
                  className="dark:text-gray-400 text-gray-700 hover:text-sky-500 dark:hover:text-sky-500 transition duration-500 ease-in-out"
                >
                  info@mulse.id
                </a>
              </li>
              <li>
                <h4 className="text-sm uppercase font-bold mb-1">Call Us</h4>
                <a
                  href="tel:+622122049859"
                  target="_blank"
                  className="dark:text-gray-400 text-gray-700 hover:text-sky-500 dark:hover:text-sky-500 transition duration-500 ease-in-out"
                >
                  Phone: (+62) 21 2204 9859
                </a>
                <br />
                <a
                  href="https://api.whatsapp.com/send?phone=6285260062002&text=Hallo%20Mulse!%20saya%20membutuhkan%20bantuan%20terkait%20layanan%20di%20mulse.id"
                  target="_blank"
                  className="dark:text-gray-400 text-gray-700 hover:text-sky-500 dark:hover:text-sky-500 transition duration-500 ease-in-out"
                >
                  WA: (+62) 852 6006 2002
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
