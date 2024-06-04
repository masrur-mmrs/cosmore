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
    const result = new Array(rows);
    for (let i = 0; i < rows; i++) {
      result[i] = new Array(columns).fill('');
    }
    return result;
  };
  const [chartArray, setChartArray] = useState<string[][]>(createEmptyChartArray(rows, columns));

  const updateChartArray = (rowIndex: number, colIndex: number, value: string) => {
    setChartArray((prev) => {
      const updatedChartArray = [...prev];
      updatedChartArray[rowIndex] = [...updatedChartArray[rowIndex]];
      updatedChartArray[rowIndex][colIndex] = value;
      return updatedChartArray;
    });
  };

  useEffect(() => {
    createEmptyChartArray(rows, columns);
  }, [rows, columns, visible])
  

    const renderChart = () => {
        const tableRows: JSX.Element[][] = new Array(rows).fill(null).map(() => new Array(columns));

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < columns; c++) {
            tableRows[r][c] = r === 0 ?
              <TableHead key={`${r}-${c}`} row={r} column={c} updateChartArray={updateChartArray}/> :
              <TableData key={`${r}-${c}`} row={r} column={c} updateChartArray={updateChartArray}/>;
          }
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
