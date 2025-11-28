import NavHome from "@/components/Home/NavHome";

export default function LayoutVisitante({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavHome />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
