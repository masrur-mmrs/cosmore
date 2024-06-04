import React, { useState, useEffect } from "react";
import {XMarkMini} from "@medusajs/icons"

interface TableProps {
    rows: number;
    columns: number;
    setRows: React.Dispatch<React.SetStateAction<number>>;
    setColumns: React.Dispatch<React.SetStateAction<number>>
}

const CreateTable: React.FC<TableProps>= ({rows, columns, setRows, setColumns}): JSX.Element => {
    const [chartRows, setChartRows] = useState(rows);
    const [chartColumns, setChartColumns] = useState(columns);
    
    useEffect(() => {
        setRows(chartRows);
        setColumns(chartColumns);
    }, [chartRows, chartColumns]);

    return (
        <div>
            <h3 className="text-md font-semibold flex flex-row whitespace-nowrap">Chart Dimensions <p className="font-light"> (rows x columns)</p>:</h3>
            <form>
                <div className="flex flex-row">
                    <select
                     name="rows"
                     id="rows"
                     value={chartRows}
                     onChange={(e) => setChartRows(Number(e.target.value))}
                     className="block border bg-ui-bg-field rounded-md mt-1 appearence-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover pl-1"
                     >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                    <div className="mt-1"><XMarkMini/></div>
                    <select
                    name="columns"
                    id="columns"
                    value={chartColumns}
                    onChange={(e) => setChartColumns(Number(e.target.value))}
                    className="block border bg-ui-bg-field rounded-md mt-1 appearence-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover pl-1"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default CreateTable;