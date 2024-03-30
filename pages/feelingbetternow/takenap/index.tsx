import React from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import "@/app/globals.css";

function TakeNap() {
  const napBenefits = [
    "Boosts cognitive functions and enhances memory.",
    "Improves mood and reduces feelings of fatigue.",
    "Increases alertness and creativity.",
    "Supports physical health by providing relaxation to the body.",
    "Can contribute to emotional stability and well-being.",
  ];

  const napTips = [
    "Keep naps short, around 20-30 minutes, to avoid grogginess.",
    "Try to nap in the early afternoon to align with natural circadian rhythms.",
    "Create a restful environment by minimizing noise and light.",
    "Consider a short walk or a cup of coffee after napping to help wake up.",
    "Make napping a part of your regular routine for the most benefit.",
  ];

  return (
    <>
      <Head>
        <title>Power Nap Benefits and Tips</title>
        <meta
          name="description"
          content="Discover the benefits of taking power naps and tips on how to make the most of them."
        />
      </Head>
      <main className="bg-gradient-to-br from-blue-400 to-cyan-300 min-h-screen flex flex-col items-center justify-center p-5">
        <Header />
        <div className="text-center flex flex-col items-center justify-center w-full pt-24 md:pt-0">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-yellow-300 pb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            The Art of Napping
          </h1>
          <p className="text-lg md:text-xl font-medium text-white mb-6 max-w-2xl mx-auto">
            A short nap can work wonders for your mental and physical health.
            Learn how to optimize your naps.
          </p>
          {/* Benefit Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 flex flex-col items-center max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Benefits of Napping</h2>
            <ul className="text-left w-full max-w-4xl mx-auto space-y-2">
              {napBenefits.map((benefit, index) => (
                <li
                  key={index}
                  className="mb-2 p-4 bg-white bg-opacity-80 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out hover:bg-opacity-100"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <div className="flex items-center">
                    <div className="text-lg font-medium text-blue-600 mr-2">
                      •
                    </div>
                    <p className="text-md font-light text-gray-700">
                      {benefit}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Tips Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 flex flex-col items-center max-w-4xl mx-auto mt-20">
            <h2 className="text-xl font-bold mb-4">Napping Tips</h2>
            <ul className="text-left w-full max-w-4xl mx-auto space-y-2">
              {napTips.map((tip, index) => (
                <li
                  key={index}
                  className="mb-2 p-4 bg-white bg-opacity-80 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out hover:bg-opacity-100"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <div className="flex items-center">
                    <div className="text-lg font-medium text-blue-600 mr-2">
                      •
                    </div>
                    <p className="text-md font-light text-gray-700">{tip}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default TakeNap;
