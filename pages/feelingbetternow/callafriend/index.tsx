import React from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import "@/app/globals.css";

function CallAFriend() {
  const conversationStarters = [
    "What’s something exciting that happened to you this week?",
    "Have you read any good books or watched any good movies recently?",
    "What’s a hobby you’ve always wanted to pick up but never did?",
    "Are there any challenges you’re facing that I can help with?",
    "What’s one thing you’re looking forward to in the near future?",
  ];

  const makingFriendsTips = [
    "Be open and approachable in new settings; sometimes just a smile can start a conversation.",
    "Join clubs, groups, or online communities with interests similar to yours to meet like-minded people.",
    "Don’t be afraid to take the initiative and invite someone out for coffee or a virtual chat.",
    "Listen actively when others speak; showing genuine interest makes people feel valued and opens the door for deeper connections.",
    "Be yourself; authentic connections are formed when you’re honest about who you are and what you enjoy.",
  ];

  return (
    <>
      <Head>
        <title>Call A Friend - Conversation Starters</title>
        <meta
          name="description"
          content="Helpful tips and conversation starters for reaching out to friends and making new ones."
        />
      </Head>
      <main className="bg-gradient-to-br from-blue-400 to-cyan-300 min-h-screen flex flex-col items-center justify-center p-5">
        <Header />
        <div className="text-center flex flex-col items-center justify-center w-full pt-24 md:pt-0">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-yellow-300 pb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Call a Friend
          </h1>
          <p className="text-lg md:text-xl font-medium text-white mb-6 max-w-2xl mx-auto">
            Feeling nervous about reaching out? Here are some easy ways to start
            a conversation and make new friends.
          </p>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 flex flex-col items-center max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">
              How to Start a Conversation
            </h2>
            <ul className="text-left w-full space-y-2">
              {conversationStarters.map((starter, index) => (
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
                      {starter}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mb-4 mt-20">
              Tips for Making New Friends
            </h2>
            <ul className="text-left w-full space-y-2">
              {makingFriendsTips.map((tip, index) => (
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

export default CallAFriend;
