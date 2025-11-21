import NavHome from "@/components/Home/NavHome";

export default function LayoutVisitante({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="w-full flex justify-end p-4">
        <NavHome />
      </header>
      <main className="flex-1 flex items-start justify-center p-4">
        <div className="w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
