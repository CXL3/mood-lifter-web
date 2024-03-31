import React from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import "@/app/globals.css";

function About() {
  return (
    <>
      <Head>
        <title>About Us - Mood Enhancer</title>
        <meta
          name="description"
          content="Learn more about our mission to provide tools for emotional well-being."
        />
      </Head>
      <main className="bg-gradient-to-br from-blue-400 to-cyan-300 min-h-screen flex flex-col items-center justify-center p-5 text-white">
        <Header />
        <div className="text-center flex flex-col items-center justify-center w-full pt-24 md:pt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold pb-4">About Us</h1>
          <p className="text-lg md:text-xl font-medium mb-6 max-w-4xl">
            In a world that moves fast, it&apos;s easy to lose sight of our
            emotional health. Our mission is to provide everyone with
            accessible, immediate tools to calm down, lift moods, and offer a
            guiding light out of moments of darkness. We believe in the power of
            simple acts &mdash; like breathing exercises, mindful meditation, or
            even a quick nap &mdash; to transform your day.
          </p>
          <p className="text-lg md:text-xl font-medium mb-6 max-w-4xl">
            Whether you&apos;re experiencing stress, anxiety, or feeling
            overwhelmed, our platform is here to support your journey toward
            emotional balance. From practical tips to engaging activities, we
            offer a variety of resources tailored to foster mental wellness and
            resilience.
          </p>
          <p className="text-lg md:text-xl font-medium mb-6 max-w-4xl">
            Join us in embracing a healthier, more mindful approach to managing
            emotions and navigating life&apos;s challenges. Your journey to
            emotional well-being starts here.
          </p>
          <p className="text-lg md:text-xl font-medium italic max-w-4xl">
            Please note, the information provided here is not a substitute for
            professional advice. If you are in need of emergency assistance,
            please call 911 or your local emergency number.
          </p>
        </div>
      </main>
    </>
  );
}

export default About;
