export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="dark">
      <body>
        <main>

        {children}
        </main>
      </body>
    </html>
  );
}