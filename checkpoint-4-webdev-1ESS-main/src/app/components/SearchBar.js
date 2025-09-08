export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      onChange={(e) => onSearch(e.target.value)}
      style={{ marginBottom: 20, width: '100%' }}
    />
  );
}
