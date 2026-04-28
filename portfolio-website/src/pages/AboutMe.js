// About Me page — bio paragraphs and a react-table displaying university module results
import React from 'react';
import '../styles/AboutMe.css';
import resultsData from '../assets/results.json';
import { useTable } from "react-table";

function AboutMe() {
    // useMemo prevents the data and column definitions from being recreated on every render
    const data = React.useMemo(() => resultsData, []);
    const columns = React.useMemo(() => [
        {
            Header: "Year",       // Column heading shown in <th>
            accessor: "Year",     // Key in each resultsData object to read the value from
        },
        {
            Header: "Module Name",
            accessor: "Module",
        },
        {
            Header: "Grade",
            accessor: "Grade",
        }
    ], []);

    // useTable returns props-getter functions that react-table uses to wire up
    // accessibility attributes and internal state on the table elements
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div className='aboutMe'>
            <h1 className='pageTitle'>About Me</h1>

            {/* Bio section */}
            <div className='text'>
                <p>I am a recent graduate from the University of Leeds, where I have earned a first class Bachelor's degree in Computer Science.
                    My academic journey has equipped me with a robust skill set in popular programming skills such as C, C++, Python and JavaScript, along with a deep understanding of modern software development methodologies.
                </p>
                <p>
                    Throughout my studies, I delved into crucial areas such as discrete mathematics, algorithms, and data structures.
                    These modules significantly enhanced my analytical thinking and problem-solving abilities, allowing me to approach complex challenges with confidence and creativity.
                    I have also taken part in several development teams that have allowed me to showcase my technical abilities and work alongside others to collaborate in a team environment.
                </p>
                <p>
                    Now armed with my degree and a passion for technology, I am eager to apply my technical knowledge, critical thinking and team working skills to professional projects.
                    I'm excited to contribute to the field of computer science, create efficient and innovative solutions, and continue expanding my expertise in this ever-evolving industry.
                    As a fresh graduate, I bring a combination of up-to-date technical skills, a strong theoretical foundation, and an enthusiasm for learning and growth.
                </p>
            </div>

            {/* University results table — data sourced from results.json */}
            <div className='results'>
                <br></br>
                <h2>University Results</h2>
                <h3>Overall Classification: First Class Honours</h3>
                <div className='container'>
                    <div className='resultsTable'>
                        {/* Spread getTableProps() to apply react-table's required attributes to the <table> element */}
                        <table {...getTableProps()}>
                            <thead>
                                {/* Render one <tr> per header group (react-table supports multi-level headers) */}
                                {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps()}>
                                                {column.render("Header")}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map((row) => {
                                    // prepareRow must be called before accessing row.cells
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell) => (
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
        </div>
    );
}

export default AboutMe;