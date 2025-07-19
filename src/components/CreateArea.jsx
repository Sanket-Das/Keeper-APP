import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {
    event.preventDefault();

    if (note.title.trim() === "" && note.content.trim() === "") {
      alert("Please fill in the title or content before adding!");
      return;
    }

    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div className="w-full max-w-xl mx-auto mb-6">
      <form className="flex flex-col gap-3">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          className="border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          onClick={submitNote}
          className="self-end bg-red-600 hover:bg-red-400 text-white font-semibold py-2 px-6 rounded transition duration-200"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
