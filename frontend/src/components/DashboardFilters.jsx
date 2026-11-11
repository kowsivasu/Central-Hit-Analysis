
function DashboardFilters({
    startDate,
    endDate,
    startTime,
    endTime,
    onStartDateChange,
    onEndDateChange,
    onStartTimeChange,
    onEndTimeChange,
    onApply,
    onReset
}) {
    return (
        <div className="dashboard-filters">

            <h3>Date and Time Filter</h3>

            <div className="filter-fields">

                <div className="filter-group">
                    <label>From Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => onStartDateChange(e.target.value)}
                    />
                </div>

                <div className="filter-group">
                    <label>To Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => onEndDateChange(e.target.value)}
                    />
                </div>

                <div className="filter-group">
                    <label>From Time</label>
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => onStartTimeChange(e.target.value)}
                    />
                </div>

                <div className="filter-group">
                    <label>To Time</label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => onEndTimeChange(e.target.value)}
                    />
                </div>

            </div>

            <div className="filter-buttons">
                <button onClick={onApply}>Apply Filter</button>
                <button onClick={onReset}>Reset</button>
            </div>

        </div>
    );
}

export default DashboardFilters;
