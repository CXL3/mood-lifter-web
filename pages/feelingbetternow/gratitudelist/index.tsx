import { useState, ChangeEvent, FormEvent } from "react";
import "@/app/globals.css";
import Header from "@/app/components/Header";

interface GratitudeEntry {
  id: number;
  text: string;
}

function GratitudeList() {
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState<GratitudeEntry[]>([]);
  const [nextId, setNextId] = useState(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newEntry: GratitudeEntry = {
      id: nextId,
      text: input.trim(),
    };

    setEntries([...entries, newEntry]);
    setInput("");
    setNextId(nextId + 1);
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-full max-w-md p-8 bg-white/90 backdrop-blur-lg rounded-lg shadow-lg mt-24">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Gratitude Notebook
          </h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="border-2 border-gray-300 p-2 w-full rounded mb-4"
              placeholder="What are you grateful for?"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded"
            >
              Add
            </button>
          </form>
          <ul className="list-disc pl-5">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="mb-4 p-2 rounded-lg text-gray-800 hover:bg-blue-100 transition-colors duration-200 ease-in-out cursor-pointer shadow-sm hover:shadow-md"
              >
                <span className="font-semibold text-blue-500">
                  {entry.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GratitudeList;
