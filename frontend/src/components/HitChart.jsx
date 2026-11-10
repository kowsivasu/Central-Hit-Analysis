import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

function HitChart({title, data, dataKey, color}){

    return (
        <div className="hit-chart-card">
            <h3>{title}</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line
                        type="monotone"
                        dataKey={dataKey}
                        stroke={color}
                        strokeWidth={3}
                        />
                        </LineChart >
            </ResponsiveContainer>
        </div>
    );
}
export default HitChart;


/*
LineChart - Creates a LLinechart
XAxis - Displays horizontal axis values
YAxis - Displays vertical axis values
Tooltip - Shows information when hovering
cartesianGrid - Displays background grid lines
ResponsiveContainer - Adjust chart size to its container
Line - Draws the monitoring line.
*/