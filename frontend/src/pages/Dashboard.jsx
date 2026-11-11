
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
import { useState } from 'react';
import DashboardFilters from '../components/DashboardFilters';

const hitData = [
    { name: 'Monday', hits: 120, dateTime: '2026-11-09T10:00:00' },
    { name: 'Tuesday', hits: 180, dateTime: '2026-11-10T10:00:00' },
    { name: 'Wednesday', hits: 150, dateTime: '2026-11-11T10:00:00' },
    { name: 'Thursday', hits: 250, dateTime: '2026-11-12T10:00:00' },
    { name: 'Friday', hits: 300, dateTime: '2026-11-13T10:00:00' },
    { name: 'Saturday', hits: 220, dateTime: '2026-11-14T10:00:00' },
    { name: 'Sunday', hits: 350, dateTime: '2026-11-15T10:00:00' }
];

const serverData = [
    {
        id: 1,
        server: 'Web Server 01',
        ip: '192.168.1.10',
        status: 'Active',
        hits: 5420,
        dateTime: '2026-11-11T10:30:00'
    },
    {
        id: 2,
        server: 'Web Server 02',
        ip: '192.168.1.11',
        status: 'Active',
        hits: 4230,
        dateTime: '2026-11-11T10:25:00'
    },
    {
        id: 3,
        server: 'Web Server 03',
        ip: '192.168.1.13',
        status: 'Inactive',
        hits: 1200,
        dateTime: '2026-11-11T10:15:00'
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
        time: '10:30 AM',
        dateTime: '2026-11-11T10:30:00'
    },
    {
        id: 2,
        server: 'Security Monitor',
        message: 'Failed login attempt detected',
        status: 'Warning',
        time: '10:25 AM',
        dateTime: '2026-11-11T10:25:00'
    },
    {
        id: 3,
        server: 'Network Server',
        message: 'Network connection established',
        status: 'Success',
        time: '10:20 AM',
        dateTime: '2026-11-11T10:20:00'
    },
    {
        id: 4,
        server: 'Application Server',
        message: 'Application error detected',
        status: 'Error',
        time: '10:15 AM',
        dateTime: '2026-11-11T10:15:00'
    }
];

const alertsData = [
    {
        id: 1,
        title: 'Multiple Failed Login Attempts',
        message: 'Repeated failed login attempts detected.',
        severity: 'critical',
        time: '10:30 AM',
        dateTime: '2026-11-11T10:30:00'
    },
    {
        id: 2,
        title: 'Unusual Network Traffic',
        message: 'Abnormal network traffic detected.',
        severity: 'high',
        time: '10:20 AM',
        dateTime: '2026-11-11T10:20:00'
    },
    {
        id: 3,
        title: 'High CPU Utilization',
        message: 'Server CPU utilization is above the threshold.',
        severity: 'medium',
        time: '10:15 AM',
        dateTime: '2026-11-11T10:15:00'
    }
];

function Dashboard() {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('23:59');
    const [appliedFilter, setAppliedFilter] = useState(null);



const handleApplyFilter = () => {

    if (!startDate || !endDate || !startTime || !endTime) {
        alert('Please select all date and time fields');
        return;
    }

    const start = new Date(`${startDate}T${startTime}`);
    const end = new Date(`${endDate}T${endTime}`);

    if (start > end) {
        alert('Start date/time cannot be later than end date/time');
        return;
    }

    setAppliedFilter({ start, end });
};


const handleResetFilter = () => {
    setStartDate('');
    setEndDate('');
    setStartTime('00:00');
    setEndTime('23:59');
    setAppliedFilter(null);
};

/* Recent Activity section */
const filteredActivityData = activityData.filter((activity) => {

    if (!appliedFilter) {
        return true;
    }

    const activityDate = new Date(activity.dateTime);

    return (
        activityDate >= appliedFilter.start &&
        activityDate <= appliedFilter.end
    );
});

/* HitChart section */
const filteredHitData = hitData.filter((item) => {

    if (!appliedFilter) {
        return true;
    }

    const hitDate = new Date(item.dateTime);

    return (
        hitDate >= appliedFilter.start &&
        hitDate <= appliedFilter.end
    );
});

/* ServerData section */
const filteredServerData = serverData.filter((server) => {

    if (!appliedFilter) {
        return true;
    }

    const serverDate = new Date(server.dateTime);

    return (
        serverDate >= appliedFilter.start &&
        serverDate <= appliedFilter.end
    );
});

const filteredAlerts = alertsData.filter((alert) => {

    if (!appliedFilter) {
        return true;
    }

    const alertDate = new Date(alert.dateTime);

    return (
        alertDate >= appliedFilter.start &&
        alertDate <= appliedFilter.end
    );
});



    return (
        <main className="dashboard">

            <div className="dashboard-heading">
                <h2>Dashboard Overview</h2>
                <p>Monitor your infrastructure activity</p>
            </div>


<DashboardFilters
    startDate={startDate}
    endDate={endDate}
    startTime={startTime}
    endTime={endTime}
    onStartDateChange={setStartDate}
    onEndDateChange={setEndDate}
    onStartTimeChange={setStartTime}
    onEndTimeChange={setEndTime}
    onApply={handleApplyFilter}
    onReset={handleResetFilter}
/>


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
                data={filteredHitData}
                dataKey="hits"
                color="#38BDF8"
                />
           {/* Server Information Table */}


           <DataTable
           title="Server Activity"
           columns={serverColumns}
           data={filteredServerData}
            />

<RecentActivity activities={filteredActivityData} />
           {/* Recent Security Alerts */}

<div className="alerts-section">

    <h2>Recent Security Alerts</h2>

    {filteredAlerts.map((alert) => (

        <AlertCard
            key={alert.id}
            title={alert.title}
            message={alert.message}
            severity={alert.severity}
            time={alert.time}
        />

    ))}

</div>


        </main>
    );
}


export default Dashboard;
