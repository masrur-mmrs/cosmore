import * as React from 'react';

interface TableHeadProps {
    row: number;
    column: number;
    value?: string;
    updateChartArray: Function;
}

export const TableHead: React.FC<TableHeadProps> = React.memo(({ row, column, value, updateChartArray }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => updateChartArray(row, column, e.target.value);

    return (
        <th key={`${row}-${column}`} className="bg-ui-fg-inverted-base text-center tracking-wider">
            <input
                className="pt-1 px-4 pb-1 block border text-center bg-ui-bg-field rounded-md appearence-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover"
                type="text"
                placeholder="Table Head"
                onChange={handleChange}
                autoComplete="off"
                value={value}
            />
        </th>
    );
});
