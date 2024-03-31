import React, { useState, useEffect, ChangeEvent } from "react";
import Header from "@/app/components/Header"; // Adjust the import path as needed
import "@/app/globals.css";

interface DiaryEntry {
  id: number;
  text: string;
  timestamp: string;
}
function JournalPage() {
  const [entry, setEntry] = useState<string>("");
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    // Load saved entries from localStorage
    const savedEntries = localStorage.getItem("journalEntries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const handleEntryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEntry(event.target.value);
  };

  const saveEntry = () => {
    // Create a new entry
    const newEntry: DiaryEntry = {
      id: new Date().getTime(), // Use timestamp as a simple unique ID
      text: entry,
      timestamp: new Date().toLocaleString(),
    };
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
    alert("Journal entry saved!");
    setEntry(""); // Clear the textarea after saving
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-blue-400 to-cyan-300 p-5">
      <Header />
      <div className="mt-24 w-full max-w-xl">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-yellow-300 text-center pb-16"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Journal
        </h1>
        <textarea
          className="w-full h-64 p-4 border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          value={entry}
          onChange={handleEntryChange}
          placeholder="What's on your mind?"
        />
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={saveEntry}
        >
          Save
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            Previous Entries
          </h2>
          {entries.length > 0 ? (
            entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white p-4 rounded-md shadow mb-4"
              >
                <p className="text-sm text-gray-600">{entry.timestamp}</p>
                <p className="mt-2">{entry.text}</p>
              </div>
            ))
          ) : (
            <p>No entries yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default JournalPage;
