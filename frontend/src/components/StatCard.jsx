function StatCard({ icon: Icon, title, value}){
    return (
        <div className="summary-card">
        <Icon size={28} />
        <h3>{title}</h3>
        <h2>{value}</h2>
        </div>
    );
}
export default StatCard;