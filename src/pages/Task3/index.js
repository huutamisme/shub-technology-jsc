import React, { useEffect, useState } from "react";

const fetchInputData = async () => {
    try {
        const response = await fetch("https://share.shub.edu.vn/api/intern-test/input", {
            method: "GET",
        });
        if (!response.ok) throw new Error("Failed to fetch input data");
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const sendOutputData = async (token, results) => {
    try {
        const response = await fetch("https://share.shub.edu.vn/api/intern-test/output", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ results }),
        });
        if (!response.ok) throw new Error("Failed to send output data");
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};


function Task3() {

    // sample data
    const sampleData = {
        token: "sample_token_123",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        query: [
            { type: "1", range: [0, 4] },
            { type: "2", range: [1, 5] },
            { type: "1", range: [3, 8] },
            { type: "2", range: [0, 9] },
        ],
    };

    const [data, setData] = useState([]);
    const [queries, setQueries] = useState([]);
    const [token, setToken] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const inputData = fetchInputData();
                setData(inputData.data);
                setQueries(inputData.query);
                setToken(inputData.token);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleProcessQueries = () => {
        const results = queries.map(({ type, range }) => {
            const [l, r] = range;
            if (type === "1") {
                // Loại 1: Tính tổng các phần tử trong khoảng
                return data.slice(l, r + 1).reduce((sum, num) => sum + num, 0);
            } else if (type === "2") {
                // Loại 2: Tính tổng phần tử ở vị trí chẵn - lẻ
                return data.slice(l, r + 1).reduce((sum, num, idx) => {
                    return idx % 2 === 0 ? sum + num : sum - num;
                }, 0);
            }
            return 0;
        });
        setResults(results);
    };

    const handleSubmitResults = async () => {
        try {
            await sendOutputData(token, results);
            alert("Results submitted successfully!");
        } catch (error) {
            console.error("Error submitting results:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <h1 className="text-4xl font-bold mb-4 break-words text-center">Truy vấn mảng số nguyên không âm</h1>
            {loading ? (
                <div className="text-lg text-center">Loading...</div>
            ) : (
                <div className="flex flex-col w-full items-center">
                    <div className="mb-4 w-full max-w-lg">
                        <button
                            className="btn btn-primary w-full"
                            onClick={handleProcessQueries}
                            disabled={queries.length === 0}
                        >
                            Truy vấn
                        </button>
                    </div>
                    <div className="mb-4 w-full max-w-lg">
                        <button
                            className="btn btn-success w-full"
                            onClick={handleSubmitResults}
                            disabled={results.length === 0}
                        >
                            Gửi kết quả
                        </button>
                    </div>
                    <div className="bg-white shadow p-4 rounded-lg w-full max-w-lg">
                        <h2 className="text-lg font-semibold">Kết quả:</h2>
                        <ul>
                            {results.map((result, index) => (
                                <li key={index} className="py-1">
                                    Query {index + 1}: {result}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Task3;
