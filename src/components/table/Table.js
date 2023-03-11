import React, { useEffect, useState } from "react";
import axios from "axios";
import TableData from "./TableData";
import "./Table.css";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://27a5-43-242-123-227.in.ngrok.io/api/excel/v2/gdrs/pendingsupplier"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="pending-supplier">
      <div className="upload-excel">
        <h1>Pending Suppliers</h1>
        <button>Upload Excel File</button>
      </div>
      <TableData data={data} />
    </div>
  );
};

export default Table;
