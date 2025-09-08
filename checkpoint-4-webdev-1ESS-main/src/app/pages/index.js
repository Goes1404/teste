import Header from '../components/Header';
import NotesForm from '../components/NotesForm';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NotesList';
import { useNotes } from '../context/NotesContext';
import { useState } from 'react';

export default function HomePage() {
  const { notes } = useNotes();
  const [search, setSearch] = useState('');

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <Header />
      <NotesForm />
      <SearchBar onSearch={setSearch} />
      <NotesList notes={filteredNotes} />
    </div>
  );
}
