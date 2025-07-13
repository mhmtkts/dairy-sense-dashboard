import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/layout/Navbar';
import RightPanel from './components/layout/RightPanel';

const PlaceholderPage = () => (
  <div className="p-4">
    <h2 className="text-xl bg-white">Bu sayfanın içeriği case study kapsamında değildir.</h2>
  </div>
);

function App() {
  return (
    <div className="flex h-screen bg-white font-sans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/reports" element={<PlaceholderPage />} />
            <Route path="/protocols" element={<PlaceholderPage />} />
            <Route path="/events" element={<PlaceholderPage />} />
            <Route path="/agenda" element={<PlaceholderPage />} />
            <Route path="/users" element={<PlaceholderPage />} />
            <Route path="/treatments" element={<PlaceholderPage />} />
            <Route path="/chats" element={<PlaceholderPage />} />
          </Routes>
        </main>
      </div>

      <RightPanel />
    </div>
  );
}

export default App;