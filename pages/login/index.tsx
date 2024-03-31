import React from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import { signIn } from "next-auth/react";
import "@/app/globals.css";

function Login() {
  return (
    <>
      <Head>
        <title>Login - Mood Enhancer</title>
        <meta
          name="description"
          content="Login to access personalized features."
        />
      </Head>
      <main className="bg-gradient-to-br from-blue-400 to-cyan-300 min-h-screen flex flex-col items-center justify-center p-5 text-white">
        <Header />
        <div className="text-center flex flex-col items-center justify-center w-full pt-24 md:pt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold pb-4">Login</h1>
          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white my-2 w-full sm:w-auto sm:min-w-[200px]"
          >
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 256 262"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M255.68 130.93c0-8.32-.71-16.34-2.05-24.09H130.45v45.68h70.92c-3.07 20.97-12.92 38.74-30.96 50.96l-.25.17 45.15 34.98.31.03c41.67-38.37 65.06-94.87 65.06-163.73z"
                fill="#4285F4"
              />
              <path
                d="M130.45 262c35.35 0 65.03-11.64 86.72-31.54l-40.14-31.08c-11.7 7.87-26.63 12.5-42.96 12.5-32.98 0-60.91-22.25-70.81-52.28l-.15.13-40.43 31.25-.52.15c20.07 39.61 61.16 65.89 107.29 71.07z"
                fill="#34A853"
              />
              <path
                d="M59.64 157.76c-2.15-6.38-3.38-13.22-3.38-20.31s1.23-13.93 3.38-20.31v-.4l-40.17-31.07-.27.13c-8.96 17.73-14.05 38.25-14.05 60.65s5.09 42.92 14.05 60.65l40.44-31.34z"
                fill="#FBBC05"
              />
              <path
                d="M130.45 50.18c18.77 0 35.69 6.48 49.02 17.9l36.78-35.82C197.48 11.64 165.8 0 130.45 0 79.09 0 36.99 26.28 17.14 65.89l40.44 31.34c10.9-30.03 37.83-47.05 72.87-47.05z"
                fill="#EB4335"
              />
            </svg>
            Login with Google
          </button>
          <button
            onClick={() => signIn("facebook")}
            className="flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white my-2 w-full sm:w-auto sm:min-w-[200px]"
          >
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.82-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
            Login with Facebook
          </button>
        </div>
      </main>
    </>
  );
}

export default Login;
