
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
import TrafficTrendChart from '../components/TrafficTrendChart';

const hitData = [
    { name: 'Monday', hits: 120, dateTime: '2026-11-09T10:00:00' },
    { name: 'Tuesday', hits: 180, dateTime: '2026-11-10T10:00:00' },
    { name: 'Wednesday', hits: 150, dateTime: '2026-11-11T10:00:00' },
    { name: 'Thursday', hits: 250, dateTime: '2026-11-12T10:00:00' },
    { name: 'Friday', hits: 300, dateTime: '2026-11-13T10:00:00' },
    { name: 'Saturday', hits: 220, dateTime: '2026-11-14T10:00:00' },
    { name: 'Sunday', hits: 350, dateTime: '2026-11-15T10:00:00' }
];


const summaryHitData = [
    { id: 1, category: 'web', hits: 1200, dateTime: '2026-11-09T10:00:00' },
    { id: 2, category: 'network', hits: 600, dateTime: '2026-11-10T11:00:00' },
    { id: 3, category: 'application', hits: 400, dateTime: '2026-11-11T12:00:00' },
    { id: 4, category: 'web', hits: 800, dateTime: '2026-11-12T10:30:00' },
    { id: 5, category: 'network', hits: 300, dateTime: '2026-11-13T09:30:00' },
    { id: 6, category: 'web', hits: 500, dateTime: '2026-11-14T14:00:00' },
    { id: 7, category: 'application', hits: 200, dateTime: '2026-11-15T15:00:00' },
    { id: 8, category: 'cybersecurity', hits: 300, dateTime: '2026-11-10T13:00:00' },
    { id: 9, category: 'cybersecurity', hits: 200, dateTime: '2026-11-12T14:00:00' }
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

// Live Monitoring Status
const monitoringStatus = 'Active';

const isMonitoringActive = monitoringStatus === 'Active';

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

/* Alert Filter  section*/
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


/* Alert Severity Counts – Critical, High, Medium and Low. */
// Calculate Critical Alerts
const criticalCount = filteredAlerts.filter(
    (alert) => alert.severity === 'critical'
).length;

// Calculate High Alerts
const highCount = filteredAlerts.filter(
    (alert) => alert.severity === 'high'
).length;

// Calculate Medium Alerts
const mediumCount = filteredAlerts.filter(
    (alert) => alert.severity === 'medium'
).length;

// Calculate Low Alerts
const lowCount = filteredAlerts.filter(
    (alert) => alert.severity === 'low'
).length;

console.log("Critical Alerts:", criticalCount);
console.log("High Alerts:", highCount);
console.log("Medium Alerts:", mediumCount);
console.log("Low Alerts:", lowCount);

// Filter summary data using the selected date and time
const filteredSummaryHitData = summaryHitData.filter((item) => { /* filter() is the js method to select records that satisfy a condition. and item represents one record from the array. */

  
    if (!appliedFilter) return true;

    const hitDate = new Date(item.dateTime);

    return (
        hitDate >= appliedFilter.start &&
        hitDate <= appliedFilter.end
    );
});

// Traffic Trends Data

const trendDays = hitData.filter((day) => {

    if (!appliedFilter) {
        return true;
    }

    const dayDate = day.dateTime.slice(0, 10);

    return (
        dayDate >= startDate &&
        dayDate <= endDate
    );

});

const trafficTrendData = trendDays.map((day) => {

    const dayDate = day.dateTime.slice(0, 10);

    const dailyHits = filteredSummaryHitData.filter(
        (item) => item.dateTime.slice(0, 10) === dayDate
    );

    return {
        name: day.name,

        web: dailyHits
            .filter((item) => item.category === 'web')
            .reduce((total, item) => total + item.hits, 0),

        cybersecurity: dailyHits
            .filter((item) => item.category === 'cybersecurity')
            .reduce((total, item) => total + item.hits, 0),

        network: dailyHits
            .filter((item) => item.category === 'network')
            .reduce((total, item) => total + item.hits, 0),

        application: dailyHits
            .filter((item) => item.category === 'application')
            .reduce((total, item) => total + item.hits, 0)
    };

});

// Calculate Total Hits
const totalHits = filteredSummaryHitData.reduce(
    (total, item) => total + item.hits,
    0
);

// Calculate Web Server Hits
const webServerHits = filteredSummaryHitData
    .filter((item) => item.category === 'web')
    .reduce((total, item) => total + item.hits, 0);

// Calculate Cybersecurity Hits
const cybersecurityHits = filteredSummaryHitData
    .filter((item) => item.category === 'cybersecurity')
    .reduce((total, item) => total + item.hits, 0);

// Calculate Network Hits
const networkHits = filteredSummaryHitData
    .filter((item) => item.category === 'network')
    .reduce((total, item) => total + item.hits, 0);

// Calculate Application Hits
const applicationHits = filteredSummaryHitData
    .filter((item) => item.category === 'application')
    .reduce((total, item) => total + item.hits, 0);

// Server Online / Offline Status

const onlineServerCount = serverData.filter(
    (server) => server.status === 'Active'
).length;

const offlineServerCount = serverData.filter(
    (server) => server.status === 'Inactive'
).length;


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
        value={totalHits.toLocaleString()}
    />

    <StatCard
        icon={Globe}
        title="Web Server Hits"
        value={webServerHits.toLocaleString()}
    />

    <StatCard
        icon={ShieldAlert}
        title="Cybersecurity Hits"
        value={cybersecurityHits.toLocaleString()}
    />

    <StatCard
        icon={Network}
        title="Network Hits"
        value={networkHits.toLocaleString()}
    />

    <StatCard
        icon={Activity}
        title="Application Hits"
        value={applicationHits.toLocaleString()}
    />

</div>


{/* Alert Severity Counts – Critical, High, Medium and Low */}
<div className="severity-cards">

    <StatCard
        icon={ShieldAlert}
        title="Critical Alerts"
        value={criticalCount}
    />

    <StatCard
        icon={ShieldAlert}
        title="High Alerts"
        value={highCount}
    />

    <StatCard
        icon={ShieldAlert}
        title="Medium Alerts"
        value={mediumCount}
    />

    <StatCard
        icon={ShieldAlert}
        title="Low Alerts"
        value={lowCount}
    />

</div>


{/* Live Monitoring Status */}



<div className="monitoring-status">

    <h2>Live Monitoring Status</h2>

    <div className="monitoring-status-card">

        <div className="monitoring-info">

            <Activity size={28} />

            <div>
                <h3>
                    {isMonitoringActive
                        ? 'Monitoring Service Running'
                        : 'Monitoring Service Stopped'}
                </h3>

                <p>
                    Monitoring status:
                    {' '}
                    {monitoringStatus}
                </p>
            </div>

        </div>

        <span
            className={
                isMonitoringActive
                    ? 'monitoring-badge active'
                    : 'monitoring-badge inactive'
            }
        >
            {monitoringStatus.toUpperCase()}
        </span>

    </div>

</div>
            
  
  
  {/* Server Online / Offline Status */}

<div className="server-status">

    <h2>Server Online / Offline Status</h2>

    <div className="server-status-cards">

        <div className="server-status-card">

            <h3>Online Servers</h3>

            <p className="online-count">
                {onlineServerCount}
            </p>

        </div>

        <div className="server-status-card">

            <h3>Offline Servers</h3>

            <p className="offline-count">
                {offlineServerCount}
            </p>

        </div>

    </div>

    <div className="server-status-list">

        {serverData.map((server) => (

            <div className="server-status-item" key={server.name}>

                <div>
                    <h4>{server.name}</h4>
                    <p>{server.ip}</p>
                </div>

                <span
                    className={
                        server.status === 'Active'
                            ? 'server-badge online'
                            : 'server-badge offline'
                    }
                >
                    {server.status === 'Active' ? 'ONLINE' : 'OFFLINE'}
                </span>

            </div>

        ))}

    </div>

</div>
  
  
            {/* Hit Analysis Chart */}

            <HitChart
                title="Weekly Hit Analysis"
                data={filteredHitData}
                dataKey="hits"
                color="#38BDF8"
                />


                <TrafficTrendChart data={trafficTrendData} />
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
