import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
      <Link href="/">🏠 Home</Link>
    </header>
  );
}