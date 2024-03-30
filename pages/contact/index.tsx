import React, { useState, ChangeEvent, FormEvent } from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import "@/app/globals.css";

interface FormData {
  title: string;
  email: string;
  content: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    email: "",
    content: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ title: "", email: "", content: "" }); // Reset form
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Mood Enhancer</title>
        <meta name="description" content="Send us a message." />
      </Head>
      <main className="bg-gradient-to-br from-blue-400 to-cyan-300 min-h-screen flex flex-col items-center justify-center p-5 text-white">
        <Header />
        <div className="text-center flex flex-col items-center justify-center w-full pt-24 md:pt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold pb-4">
            Contact Us
          </h1>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-bold mb-2">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 rounded text-black bg-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded text-black bg-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-bold mb-2">
                Message:
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full p-2 rounded text-black bg-opacity-50 h-32"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Contact;
