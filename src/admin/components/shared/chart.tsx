import * as React from 'react';
import { useState, useEffect } from 'react';
import { TableHead } from './tableHead';
import { TableData } from './tableData';

interface ChartProps {
    visible: boolean;
    rows: number;
    columns: number;
}

export const Chart: React.FC<ChartProps> = ({visible, rows, columns}) => {

  const createEmptyChartArray = (rows: number, columns: number): string[][] => {
    return Array.from({ length: rows }, () => Array.from({ length: columns }, () => ''));
  };
  const [chartArray, setChartArray] = useState<string[][]>(createEmptyChartArray(rows, columns));

  const updateChartArray = (rowIndex: number, colIndex: number, value: string) => {
    const updatedChartArray = [...chartArray];
    updatedChartArray[rowIndex][colIndex] = value;
    setChartArray(updatedChartArray);
  };

  useEffect(() => {
    createEmptyChartArray(rows, columns);
  }, [rows, columns, visible])
  

    const renderChart = () => {
        const tableRows: JSX.Element[][] = [];

        for (let r = 0; r < rows; r++) {
          const rowCells: JSX.Element[] = [];
    
          for (let c = 0; c < columns; c++) {
            // const cellValue = (chartArray[r][c])?(chartArray[r][c]):("");
            // console.log(cellValue);
            
            if (r === 0) {
                rowCells.push(<TableHead row={r} column={c} updateChartArray={updateChartArray}/>);
            }
            else {
                rowCells.push(<TableData row={r} column={c} updateChartArray={updateChartArray}/>);
            }
          }
          tableRows.push(rowCells);
        }
        return tableRows.map((row, rowIndex) => <tr key={`${rowIndex}-${row}`}>{row}</tr>);
    };

  return (
    visible?(
    <form>
        <table className="rounded-md border-separate mt-2 border border-ui-border-base">
          {renderChart()}
        </table>
    </form>
    ):(<></>)
  );
}
