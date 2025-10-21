export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="dark">
      <body className="flex flex-col min-h-screen">
        <main>

        {children}
        </main>
      </body>
    </html>
  );
}