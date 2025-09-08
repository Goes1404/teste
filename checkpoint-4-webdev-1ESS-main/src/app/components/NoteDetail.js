import { useNotes } from '../context/NotesContext';
import { useRouter } from 'next/router';

export default function NoteDetail() {
  const { notes } = useNotes();
  const { query } = useRouter();
  const note = notes.find(n => n.id === query.id);

  if (!note) return <p>Anotação não encontrada.</p>;

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p><small>Criada em: {note.createdAt}</small></p>
    </div>
  );
}
