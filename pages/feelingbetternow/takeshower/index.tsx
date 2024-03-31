import React from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import "@/app/globals.css";

function TakeShower() {
  const showerBenefits = [
    "Helps to relax muscles and reduce stress.",
    "Can improve blood circulation and skin health.",
    "Aids in better sleep, especially when taken before bedtime.",
    "Boosts mood through the release of endorphins.",
    "Helps to refresh and energize your body for the day ahead.",
  ];

  const showerTips = [
    "Consider using essential oils like lavender or eucalyptus for aromatherapy benefits.",
    "Try alternating between hot and cold water to invigorate your skin and improve circulation.",
    "Use a gentle, moisturizing soap to keep your skin hydrated.",
    "Spend a few minutes just standing under the water to clear your mind and relax.",
    "End your shower with slightly cooler water to close pores and feel refreshed.",
  ];

  return (
    <>
      <Head>
        <title>Enjoying Your Shower</title>
        <meta
          name="description"
          content="Discover the benefits of taking showers and tips on how to make the most of them."
        />
      </Head>
      <main className="bg-gradient-to-br from-blue-400 to-cyan-300 min-h-screen flex flex-col items-center justify-center p-5">
        <Header />
        <div className="text-center flex flex-col items-center justify-center w-full pt-24">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-yellow-300 pb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            The Art of Taking a Shower
          </h1>
          <p className="text-lg md:text-xl font-medium text-white mb-6 max-w-2xl mx-auto">
            Enhance your daily shower experience with these benefits and tips.
          </p>
          {/* Benefits Section with consistent width setting */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 flex flex-col items-center max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Benefits of Showering</h2>
            <ul className="text-left w-full space-y-2">
              {showerBenefits.map((benefit, index) => (
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

          {/* Tips Section with identical width setting for consistency */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 flex flex-col items-center max-w-4xl mx-auto mt-20">
            <h2 className="text-xl font-bold mb-4">Shower Tips</h2>
            <ul className="text-left w-full space-y-2">
              {showerTips.map((tip, index) => (
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

export default TakeShower;
