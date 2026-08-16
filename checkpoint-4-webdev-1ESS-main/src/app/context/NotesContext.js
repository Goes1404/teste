import React, { createContext, useContext, useState } from 'react';

const uuidv4 = () => crypto.randomUUID();

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  function addNote(title, content) {
    const newNote = {
      id: uuidv4(),
      title,
      content,
      createdAt: new Date().toLocaleString(),
    };
    setNotes(prev => [newNote, ...prev]);
  }

  function deleteNote(id) {
    setNotes(prev => prev.filter(note => note.id !== id));
  }

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}
