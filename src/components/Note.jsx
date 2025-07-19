import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="bg-yellow-100 rounded-lg p-4 shadow-md relative">
      <h1 className="text-xl font-bold mb-2">{props.title}</h1>
      <p className="text-gray-700 mb-4">{props.content}</p>
      <button
        onClick={handleClick}
        className="absolute bottom-2 right-2 text-sm bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded transition duration-200"
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
