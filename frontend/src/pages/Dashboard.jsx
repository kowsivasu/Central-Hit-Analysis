
import {
    Activity,
    Globe,
    ShieldAlert,
    Network
} from 'lucide-react';

import StatCard from '../components/StatCard';
import './Dashboard.css';
import HitChart from '../components/HitChart';
import DataTable from '../components/DataTable';
import AlertCard from '../components/AlertCard';
import RecentActivity from '../components/RecentActivity';

const hitData = [
    { name: 'Monday', hits: 120 },
    { name: 'Tuesday', hits: 180 },
    { name: 'Wednesday', hits: 150 },
    { name: 'Thursday', hits: 250 },
    { name: 'Friday', hits: 300 },
    { name: 'Saturday', hits: 220 },
    { name: 'Sunday', hits: 350 }
]

const serverData = [
    {
        id: 1,
        server: 'Web Server 01',
        ip: '192.168.1.10',
        status: 'Active',
        hits: 5420
    },
    {
        id: 2,
        server: 'Web Server 02',
        ip: '192.168.1.11',
        status: 'Active',
        hits: 4230
    },
    {
        id: 3,
        server: 'Web Server 03',
        ip: '192.168.1.13',
        status: 'Inactive',
        hits: 1200
    }
];

const serverColumns = [
   { key: 'server', label: 'Server Name'},
   { key: 'ip', label: 'IP Address'},
   {key: 'status', label: 'Status'},
   {key: 'hits', label: 'Total Hits'}

];


const activityData = [
    {
        id: 1,
        server: 'Web Server 01',
        message: 'New HTTP request received',
        status: 'Success',
        time: '10:30 AM'
    },
    {
        id: 2,
        server: 'Security Monitor',
        message: 'Failed login attempt detected',
        status: 'Warning',
        time: '10:25 AM'
    },
    {
        id: 3,
        server: 'Network Server',
        message: 'Network connection established',
        status: 'Success',
        time: '10:20 AM'
    },
    {
        id: 4,
        server: 'Application Server',
        message: 'Application error detected',
        status: 'Error',
        time: '10:15 AM'
    }
];


function Dashboard() {

    return (
        <main className="dashboard">

            <div className="dashboard-heading">
                <h2>Dashboard Overview</h2>
                <p>Monitor your infrastructure activity</p>
            </div>

            <div className="summary-cards">

                <StatCard
                    icon={Activity}
                    title="Total Hits"
                    value="24,580"
                />

                <StatCard
                    icon={Globe}
                    title="Web Server Hits"
                    value="12,450"
                />

                <StatCard
                    icon={ShieldAlert}
                    title="Security Alerts"
                    value="128"
                />

                <StatCard
                    icon={Network}
                    title="Network Hits"
                    value="8,320"
                />
            </div>
            
            {/* Hit Analysis Chart */}

            <HitChart
                title="Weekly Hit Analysis"
                data={hitData}
                dataKey="hits"
                color="#38BDF8"
                />
           {/* Server Information Table */}


           <DataTable
           title="Server Activity"
           columns={serverColumns}
           data={serverData}
            />

<RecentActivity activities={activityData} />

           {/* Recent Security Alerts */}

<div className="alerts-section">
    <h2>Recent Security Alerts</h2>

    <AlertCard
        title="Multiple Failed Login Attempts"
        message="Repeated failed login attempts detected."
        severity="critical"
        time="10 minutes ago"
    />

    <AlertCard
        title="Unusual Network Traffic"
        message="Abnormal network traffic detected."
        severity="high"
        time="20 minutes ago"
    />

    <AlertCard
        title="High CPU Utilization"
        message="Server CPU utilization is above the threshold."
        severity="medium"
        time="30 minutes ago"
    />
</div>


        </main>
    );
}


export default Dashboard;
