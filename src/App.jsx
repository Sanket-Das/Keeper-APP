import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="font-sans min-h-screen flex flex-col justify-between bg-gray-50">
      <Header />
      <main className="flex-grow px-6 md:px-20 py-8">
        <CreateArea onAdd={addNote} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
