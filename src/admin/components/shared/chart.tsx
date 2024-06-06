import * as React from 'react';
import { useState, useEffect } from 'react';
import { TableHead } from './tableHead';
import { TableData } from './tableData';

interface ChartProps {
    visible: boolean;
    rows: number;
    columns: number;
    handleSetChartData: (chartArray: string[][]) => void;
}

export const Chart: React.FC<ChartProps> = ({visible, rows, columns, handleSetChartData}) => {

  const createEmptyChartArray = (rows: number, columns: number): string[][] => {
    const result: string[][] = new Array(rows);
    for (let i = 0; i < rows; i++) {
      result[i] = new Array(columns).fill('');
    }
    return result;
  };

  const [chartArray, setChartArray] = useState<string[][]>(createEmptyChartArray(rows, columns));

  const updateChartArray = (rowIndex: number, colIndex: number, value: string): void => {
    // Check if the indices are within the valid range
    if (rowIndex < 0 || rowIndex >= chartArray.length) {
      console.error(`rowIndex ${rowIndex} is out of bounds.`);
      return;
    }
    if (colIndex < 0 || colIndex >= chartArray[rowIndex].length) {
      console.error(`colIndex ${colIndex} is out of bounds.`);
      return;
    }
  
    // Create a copy of the chart array to avoid direct mutation
    const updatedArray = chartArray.map(row => row.slice());
  
    // Update the specified value
    updatedArray[rowIndex][colIndex] = value;
  
    // Set the updated array using setChartArray
    setChartArray(updatedArray);
  }


  useEffect(() => {
    setChartArray(createEmptyChartArray(rows, columns));
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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (chartArray.length > 0) {
      handleSetChartData(chartArray);
    } 
  }

  return (
    visible?(
    <form>
        <table className="rounded-md border-separate mt-2 border border-ui-border-base">
          <tbody>{renderChart()}</tbody>
        </table>
        <button 
        className="bg-[#121212] text-white p-1 px-4 mt-2 rounded-md hover:bg-[#2b2b2b] active:scale-95" 
        onClick={handleSubmit} 
        type="submit"
        >
          Submit Data
        </button>
    </form>
    ):(<></>)
  );
}
