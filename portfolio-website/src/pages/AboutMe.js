import React from 'react';
import '../styles/AboutMe.css';
import resultsData from '../assets/results.json';
import {useTable} from "react-table";

function AboutMe() {
    const data = React.useMemo(()=>resultsData,[]);
    const columns = React.useMemo(()=>[
        {
            Header:"Year",
            accessor:"Year",
        },
        {
            Header:"Module Name",
            accessor:"Module",
        },
        {
            Header:"Grade",
            accessor:"Grade",
        }
    ],[]);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns,data});

    return (
      <div className='aboutMe'>
        <h1 className='pageTitle'>About Me</h1>
        <p>This is about me</p>

        <div className='results'>

            <h2>First Year</h2> 
            <div className='resultsTable'>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup)=>(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column)=>(
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row)=>{
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}>
                                   {row.cells.map((cell)=>(
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                   ))} 
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
  }
  
  export default AboutMe;