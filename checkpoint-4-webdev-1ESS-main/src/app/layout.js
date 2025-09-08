'use client'
import { NotesProvider } from './context/NotesContext';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NotesProvider>
          {children}
        </NotesProvider>
      </body>
    </html>
  );
}
