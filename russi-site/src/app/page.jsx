import Footer from "../components/footer"
import Banner from "../components/header/banner";
import HamburgerButton from "@/components/menu/HamburgerButton";
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="dark">
      <body className="flex flex-col min-h-screen">
        <header className="flex-grow">
          <Banner></Banner>
        </header>
        <main>
          
        </main>
        {children}
            <Footer></Footer>
      </body>
    </html>
  );
}