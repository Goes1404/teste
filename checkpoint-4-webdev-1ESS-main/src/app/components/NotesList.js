import NoteItem from '../components/NotesItem'

export default function NotesList({ notes }) {
  if (!notes || notes.length === 0) {
    return <p>Nenhuma anotação encontrada.</p>;
  }

  return (
    <>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </>
  );
}
