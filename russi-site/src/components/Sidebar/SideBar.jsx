import SidebarItem from "./SideBarItem";

export default function Sidebar() {
    return (
        <aside
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <SidebarItem
                        label="Home"
                        icon={
                            <svg
                                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10.707 1.293a1 1 0 00-1.414 0l-8 8a1 1 0 001.414 1.414L3 10.414V17a1 1 0 001 1h4a1 1 0 001-1v-3h2v3a1 1 0 001 1h4a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-8-8z" />
                            </svg>
                        }
                    />
                    <SidebarItem label="Sobre" badge="3" icon="" route="" />
                    <SidebarItem label="Serviços" icon="" route="" />
                    <SidebarItem label="Contato" icon="" route="" />
                    <SidebarItem label="Trabalhe Conosco" icon="" route="e" />
                    <SidebarItem label="Área Restrita" badge="Admin" icon="" route="/login" />
                </ul>
            </div>
        </aside>
    );
}