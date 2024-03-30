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
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white my-2"
          >
            Login with Google
          </button>
          <button
            onClick={() => signIn("facebook")}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white my-2"
          >
            Login with Facebook
          </button>
        </div>
      </main>
    </>
  );
}

export default Login;
