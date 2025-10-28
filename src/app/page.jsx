import HomePage from "@/components/Home";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="">
      <body>
        <main>
        <HomePage></HomePage>
        {children}
        </main>
      </body>
    </html>
  );
}