'use client'
import Header from '../app/components/Header';
import NotesForm from '../app/components/NotesForm';
import SearchBar from '../app/components/SearchBar';
import NotesList from '../app/components/NotesList';
import { useNotes } from '../app/context/NotesContext';
import { useState } from 'react';

export default function HomePage() {
  const { notes } = useNotes();
  const [search, setSearch] = useState('');

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

//FOI
  

  return (
    <div style={{ padding: 20 }}>
      <Header />
      <a
        href="/portal"
        style={{
          display: 'inline-block',
          marginBottom: 16,
          padding: '8px 16px',
          background: '#2A1560',
          color: '#fff',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Abrir Portal do Aluno →
      </a>
      <NotesForm />
      <SearchBar onSearch={setSearch} />
      <NotesList notes={filteredNotes} />
    </div>
  );
}
