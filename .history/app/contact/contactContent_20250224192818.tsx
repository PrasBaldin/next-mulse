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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Contoh panggilan ke backend NestJS:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('Sukses:', data);
    //   })
    //   .catch((err) => {
    //     console.error('Error:', err);
    //   });
    alert("Form submitted!");
  };

  return (
    <section className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white py-16">
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
          <div className="p-8 bg-gray-200 dark:bg-gray-600 rounded">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
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
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="John Doe"
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
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="johndoe@example.com"
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
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Looking for a new website"
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
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 transition-colors rounded font-semibold"
              >
                SUBMIT
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
                <p className="text-gray-100">
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
                  className="text-gray-100 hover:text-sky-500 transition duration-500 ease-in-out"
                >
                  info@mulse.id
                </a>
              </li>
              <li>
                <h4 className="text-sm uppercase font-bold mb-1">Call Us</h4>
                <a
                  href="tel:+622122049859"
                  target="_blank"
                  className="text-gray-100 hover:text-sky-500 transition duration-500 ease-in-out"
                >
                  Phone: (+62) 21 2204 9859
                </a>
                <br />
                <a
                  href="https://api.whatsapp.com/send?phone=6285260062002&text=Hallo%20Mulse!%20saya%20membutuhkan%20bantuan%20terkait%20layanan%20di%20mulse.id"
                  target="_blank"
                  className="text-gray-100 hover:text-sky-500 transition duration-500 ease-in-out"
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
