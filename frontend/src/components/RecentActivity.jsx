function RecentActivity({ activities }) {
    return (
        <div className="recent-activity-card">
            <h3>Recent Activity</h3>

            <div className="activity-list">
                {activities.map((activity) => (
                <div className="activity-item" key={activity.id}>
                    <div className="activity-details">
                        <h4>{activity.server}</h4>
                        <p>{activity.message}</p>
                    </div>
                    <div className="activity-info">
                        <span className={`activity-status $(activity.status.toLowerCase()}`}>{activity.status}</span>
                        <small>{activity.time}</small>
            </div>
        </div>
                )
    )
}
</div>
</div>
    );
}
export default RecentActivity;