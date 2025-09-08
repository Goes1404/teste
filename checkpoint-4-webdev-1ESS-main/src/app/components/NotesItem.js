import Link from 'next/link';
import { useNotes } from '../context/NotesContext';

export default function NoteItem({ note }) {
  const { deleteNote } = useNotes();

  return (
    <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
      <h3>{note.title}</h3>
      <p>{note.content.slice(0, 50)}...</p>
      <p><small>{note.createdAt}</small></p>
      <Link href={`/notes/${note.id}`}>Ver Detalhes</Link>
      {' | '}
      <button onClick={() => deleteNote(note.id)}>Excluir</button>
    </div>
  );
}
