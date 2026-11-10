
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';

import Dashboard from './pages/Dashboard.jsx';
import Overview from './pages/Overview.jsx';
import WebServerHits from './pages/WebServerHits.jsx';
import CybersecurityHits from './pages/CybersecurityHits.jsx';
import NetworkHits from './pages/NetworkHits.jsx';
import ApplicationHits from './pages/ApplicationHits.jsx';
import Servers from './pages/Servers.jsx';
import Alerts from './pages/Alerts.jsx';
import Reports from './pages/Reports.jsx';
import Settings from './pages/Settings.jsx';

function App() {
    return (
        <BrowserRouter>
            <div className="app">

                <Header />

                <div className="app-layout">

                    <Sidebar />

                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/overview" element={<Overview />} />
                            <Route path="/web-server-hits" element={<WebServerHits />} />
                            <Route path="/cybersecurity-hits" element={<CybersecurityHits />} />
                            <Route path="/network-hits" element={<NetworkHits />} />
                            <Route path="/application-hits" element={<ApplicationHits />} />
                            <Route path="/servers" element={<Servers />} />
                            <Route path="/alerts" element={<Alerts />} />
                            <Route path="/reports" element={<Reports />} />
                            <Route path="/settings" element={<Settings />} />

                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </main>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
