import HomePage from "@/components/Home";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>
        <HomePage></HomePage>
        {children}
        </main>
      </body>
    </html>
  );
}