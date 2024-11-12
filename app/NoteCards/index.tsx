"use client";

import { useEffect, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import NewNoteCards from "./NewNoteCards";
import NoteCards from "./NoteCards";

interface Note {
  id: string;
  date: Date;
  content: string;
}

const NotepadCards = () => {
  const [search, setSearch] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);
  const shadowStyle = { boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.75)" };

  useEffect(() => {
    const notesOnStorage = localStorage.getItem("notes");
    if (notesOnStorage) {
      setNotes(JSON.parse(notesOnStorage));
    }
  }, []);

  function onNoteCreated(content: string): void {
    const newNote: Note = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };
    const notesArray = [newNote, ...notes];
    setNotes(notesArray);
    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>): void {
    const query = event.target.value;
    setSearch(query);
  }

  function handleDeleteNote(id: string): void {
    const notesArray = notes.filter((note) => note.id !== id);
    setNotes(notesArray);
    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLowerCase().includes(search.toLowerCase())
        )
      : notes;

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-5">
      <form className="w-full">
        <div
          className="relative rounded-lg inline-block w-full bg-white border-4 border-zinc-900 text-zinc-900"
          style={shadowStyle}
        >
          <input
            type="text"
            placeholder="Busque em suas notas..."
            className="block w-full focus:outline-none rounded-xl border-0 py-3 text-gray-900 bg-white placeholder:text-gray-400 pl-10"
            onChange={handleSearch}
          />
          <MagnifyingGlass
            size={20}
            weight="duotone"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px]">
        <NewNoteCards onNoteCreated={onNoteCreated} />

        {filteredNotes.map((note) => (
          <NoteCards
            key={note.id}
            date={note.date}
            content={note.content}
            handleDeleteNote={() => handleDeleteNote(note.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NotepadCards;
