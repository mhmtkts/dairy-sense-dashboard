import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import RightPanel from "./components/layout/RightPanel";
import { SidebarProvider, useSidebar } from "./context/SidebarContext";
import { RightPanelProvider } from "./context/RightPanelContext";

// Context hook'larına erişebilmek için yeni bir ara bileşen
const AppLayout = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className="relative flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      
      {/* --- DÜZELTME: Ana içerik alanının kaymasını engelleme --- */}
      <div className={`
        flex-1 flex flex-col transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'md:ml-0' : 'md:ml-0'} 
      `}>
        <Navbar />
        <main className="flex-1 overflow-y-auto p-2 md:p-4">
          <Outlet />
        </main>
      </div>
      
      <RightPanel />

      {/* --- DÜZELTME: MOBİL İÇİN OVERLAY --- */}
      {/* Kenar çubuğu mobilde açıkken, dışarıya tıklamayı yakalamak için bu overlay eklenir. */}
      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar} 
          className="fixed inset-0 bg-opacity-50 z-20 md:hidden"
          aria-label="Close sidebar"
        ></div>
      )}
    </div>
  );
};

// Ana App bileşeni Provider'ları sarmalar
function App() {
  return (
    <SidebarProvider>
      <RightPanelProvider>
        <AppLayout />
      </RightPanelProvider>
    </SidebarProvider>
  );
}

export default App;