function DataTable({ title, columns, data}) {
    return(
        <div className="data-table-card">
            <h3>{title}</h3>
            <table className="data-table">

                <thead>
                    <tr>
                        {
                            columns.map((column) => (
                                <th key={column.key}>
                                    {column.label}
                                </th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {columns.map((column) => (
                                <td key={column.key}>
                                    {row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}
export default DataTable;