import React, { useEffect, useState } from "react";
import readXlsxFile from "read-excel-file";
import { CSVLink } from "react-csv";

function Task1() {
    const [filteredData, setFilteredData] = useState([]);
    const [headers, setHeaders] = useState([]);

    useEffect(() => {
        async function processExcel() {
            try {
                // Fetch file
                const response = await fetch('/Financial Sample.xlsx');
                const blob = await response.blob();
                const rows = await readXlsxFile(blob);

                const [header, ...dataRows] = rows;

                const salesIndex = header.indexOf("Sales");

                const filteredRows = dataRows.filter(row => row[salesIndex] > 50000);

                // Set headers and filtered data for CSV
                setHeaders(header);
                setFilteredData(filteredRows);
            } catch (error) {
                console.error("Error processing Excel file:", error);
            }
        }

        processExcel();
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Task 1</h1>
            {filteredData.length > 0 ? (
                <CSVLink
                    filename="RowsFilteredBySales.csv"
                    headers={headers}
                    data={filteredData}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Tải kết quả đã lọc
                </CSVLink>
            ) : (
                <p className="text-red-500">Không tìm thấy sheet dữ liệu</p>
            )}
        </div>
    );
}

export default Task1;
