import { useState } from "react"; 
import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import RightPanel from "./components/layout/RightPanel";
import { SidebarProvider, useSidebar } from "./context/SidebarContext";
import { RightPanelProvider, useRightPanel } from "./context/RightPanelContext";

const AppLayout = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { isRightPanelOpen, toggleRightPanel } = useRightPanel();
  const [isMobileSidebarVisible, setMobileSidebarVisible] = useState(false);


  const toggleMobileSidebar = () => {
    setMobileSidebarVisible(prev => !prev);
  };

  return (
    <div className="relative flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar isMobileVisible={isMobileSidebarVisible} />

      <div className={`
        flex-1 flex flex-col transition-all duration-300 ease-in-out
        ${isMobileSidebarVisible ? 'ml-20' : 'ml-0'}
        md:${isSidebarOpen ? 'ml-56' : 'ml-20'}
      `}>
        <Navbar toggleMobileSidebar={toggleMobileSidebar} />
        <main className="flex-1 overflow-y-auto p-2 md:p-4">
          <Outlet context={{ isRightPanelOpen, toggleRightPanel }} />
        </main>
      </div>
      
      <RightPanel />

      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar} 
          className="fixed inset-0 bg-opacity-50 z-20 md:hidden"
          aria-label="Close sidebar"
        ></div>
      )}

      {isRightPanelOpen && (
        <div 
          onClick={toggleRightPanel} 
          className="fixed inset-0 bg-opacity-50 z-20 md:hidden"
          aria-label="Close right panel"
        ></div>
      )}
    </div>
  );
};

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