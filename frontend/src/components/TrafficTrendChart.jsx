import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from 'recharts';

function TrafficTrendChart({ data }) {

    return (

        <div className="traffic-trend-chart">

            <h2>Traffic Trends</h2>

            <ResponsiveContainer width="100%" height={320}>

                <LineChart data={data}>

                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#263449"
                    />

                    <XAxis
                        dataKey="name"
                        stroke="#94A3B8"
                    />

                    <YAxis
                        stroke="#94A3B8"
                    />

                    <Tooltip />

                    <Legend />

                    <Line
                        type="monotone"
                        dataKey="web"
                        name="Web Server"
                        stroke="#38BDF8"
                        strokeWidth={3}
                    />

                    <Line
                        type="monotone"
                        dataKey="cybersecurity"
                        name="Cybersecurity"
                        stroke="#EF4444"
                        strokeWidth={3}
                    />

                    <Line
                        type="monotone"
                        dataKey="network"
                        name="Network"
                        stroke="#22C55E"
                        strokeWidth={3}
                    />

                    <Line
                        type="monotone"
                        dataKey="application"
                        name="Application"
                        stroke="#A78BFA"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );
}

export default TrafficTrendChart;