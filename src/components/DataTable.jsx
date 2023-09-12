import Table from './Table';

function DataTable() {
    const data = [
        { "Header1": "Row1Data1", "Header2": "Row1Data2" },
        { "Header1": "Row2Data1", "Header2": "Row2Data2" }
    ];

    return <Table data={data} />;
}

export default DataTable;