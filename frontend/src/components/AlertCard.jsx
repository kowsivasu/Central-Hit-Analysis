function AlertCard({ title, message, severity, time}){
    return (
        <div className={`alert-card ${severity}`}>
            <div className="alert-card-header">
                <h3>{title}</h3>
                <span>{severity.toUpperCase()}</span>
            </div>
            <p>{message}</p>
            <small>{time}</small>
        </div>
    );
}
export default AlertCard;