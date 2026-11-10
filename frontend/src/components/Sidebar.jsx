
import {
    LayoutDashboard,
    Globe,
    ShieldAlert,
    Network,
    AppWindow,
    Server,
    Bell,
    FileText,
    Settings
} from 'lucide-react';

import { NavLink } from 'react-router-dom';

import './sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-nav">

                <NavLink to="/" end className="nav-item">
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to="/overview" className="nav-item">
                    <LayoutDashboard size={20} />
                    <span>Overview</span>
                </NavLink>

                <NavLink to="/web-server-hits" className="nav-item">
                    <Globe size={20} />
                    <span>Web Server Hits</span>
                </NavLink>

                <NavLink to="/cybersecurity-hits" className="nav-item">
                    <ShieldAlert size={20} />
                    <span>Cybersecurity Hits</span>
                </NavLink>

                <NavLink to="/network-hits" className="nav-item">
                    <Network size={20} />
                    <span>Network Hits</span>
                </NavLink>

                <NavLink to="/application-hits" className="nav-item">
                    <AppWindow size={20} />
                    <span>Application Hits</span>
                </NavLink>

                <div className="sidebar-divider"></div>

                <NavLink to="/servers" className="nav-item">
                    <Server size={20} />
                    <span>Servers</span>
                </NavLink>

                <NavLink to="/alerts" className="nav-item">
                    <Bell size={20} />
                    <span>Alerts</span>
                </NavLink>

                <NavLink to="/reports" className="nav-item">
                    <FileText size={20} />
                    <span>Reports</span>
                </NavLink>

                <NavLink to="/settings" className="nav-item">
                    <Settings size={20} />
                    <span>Settings</span>
                </NavLink>

            </div>

        </aside>
    );
}

export default Sidebar;
