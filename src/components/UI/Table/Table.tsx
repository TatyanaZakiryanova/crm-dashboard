import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';

import styles from './Table.module.scss';
import { TableRow } from './types';

interface TableProps {
  headers: string[];
  rows: TableRow[];
  onSort: (column: string) => void;
  sortColumn: string | null;
  sortDirection: 'asc' | 'desc';
}

const Table: React.FC<TableProps> = ({ headers, rows, onSort, sortColumn, sortDirection }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} onClick={() => header !== '#' && onSort(header.toLowerCase())}>
                <span>
                  {header}
                  {sortColumn === header.toLowerCase() &&
                    header !== '#' &&
                    (sortDirection === 'asc' ? <ChevronUp size={15} /> : <ChevronDown size={15} />)}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, cellIndex) => (
                <td key={cellIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
