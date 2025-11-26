import HomePage from "@/components/Home/Home";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <main>
        <HomePage></HomePage>
        
        {children}
        </main>
      </body>
    </html>
  );
}