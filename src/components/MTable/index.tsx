import './MTable.scss';

import React from 'react';
import { useTable } from 'react-table';

interface props {
  columns: any[],
  data: any[],
}

const MTable = (props: props) => {
  const tableInstance = useTable(props);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <table
      className="m-table"
      {...getTableProps}
    >
      <thead>
        {
          headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
              headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {
                  column.render('Header')}
                </th>
              ))}
            </tr>
          ))
        }
      </thead>
     <tbody {...getTableBodyProps()}>
       {
       rows.map(row => {
         prepareRow(row)
         return (
           <tr {...row.getRowProps()}>
             {
             row.cells.map(cell => {
               return (
                 <td {...cell.getCellProps()}>
                   {
                   cell.render('Cell')}
                 </td>
               )
             })}
           </tr>
         )
       })}
     </tbody>
    </table>
  );
}

export default MTable;
