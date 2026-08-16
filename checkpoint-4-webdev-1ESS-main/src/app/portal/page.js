'use client'

// Portal do Aluno — app autossuficiente (bundle Claude artifact) servido a partir
// de /public/portal-do-aluno.html e exibido aqui em tela cheia via iframe.
export default function PortalPage() {
  return (
    <iframe
      src="/portal-do-aluno.html"
      title="Portal do Aluno"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 'none',
      }}
    />
  );
}
