
import {
    Activity,
    Globe,
    ShieldAlert,
    Network
} from 'lucide-react';

import StatCard from '../components/StatCard';
import './Dashboard.css';
import HitChart from '../components/HitChart';

const hitData = [
    { name: 'Monday', hits: 120 },
    { name: 'Tuesday', hits: 180 },
    { name: 'Wednesday', hits: 150 },
    { name: 'Thursday', hits: 250 },
    { name: 'Friday', hits: 300 },
    { name: 'Saturday', hits: 220 },
    { name: 'Sunday', hits: 350 }
]

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
           

        </main>
    );
}

export default Dashboard;
