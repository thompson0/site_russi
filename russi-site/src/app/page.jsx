import Footer from "../components/footer"
import Banner from "../components/header/banner";
import Sidebar from "../components/Sidebar/SideBar";
import HamburgerButton from "../components/buttons/HamburguerButton";
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="dark">
      <body className="flex flex-col min-h-screen">
        <header className="flex-grow">
          <HamburgerButton></HamburgerButton>
          <Banner></Banner>
        </header>
        <main>


          <Sidebar></Sidebar>
        </main>
        {children}
            <Footer></Footer>
      </body>
    </html>
  );
}