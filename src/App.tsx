import React, { useEffect, useRef, useState } from "react";
import reactLogo from './assets/react.svg'
import jspreadsheet from "jspreadsheet";
import { render } from "@jspreadsheet/render";
import validations from "@jspreadsheet/validations";
import './App.css';
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

// https://jspreadsheet.com/v9/docs/cells

function App() {
  let locale = 'en-US';
  let currencyMast = {
    style: 'currency',
    currency: 'USD'
  }
  let dateMask = 'dd/mm/yyyy';
  const jssRef: any = useRef(null);
  const spreadsheet: any = useRef(null);
  const [dimensions, setDimenstions] = useState({
    rows: 2,
    cols: 10
  })
  const data = [{
    worksheetName: 'Sales',
    minDimensions: [dimensions.cols, dimensions.rows],
    data: [
      ['2023-01-23', '=SUM(C1:I1)', 20, 0, 0, 0, 0, 0, 0],
      ['2023-01-23', '=SUM(C2:I2)', 300, 310, 100, 50, 20, 30, 0],
      ['2023-01-24', '=SUM(C3:I3)', 300, 310, 100, 50, 20, 30, 0],
      ['2023-01-24', '=SUM(C4:I4)', 300, 310, 100, 50, 20, 30, 0],
      ['2023-01-24', '=SUM(C5:I5)', 300, 310, 100, 50, 20, 30, 0],
      ['2023-01-24', '=SUM(C6:I6)', 300, 310, 100, 50, 20, 30, 0],
      ['2023-01-24', '=SUM(C7:I6)', 300, 310, 100, 50, 20, 30, 0],
      ['2023-01-24', '=SUM(B1:B7)', '=SUM(C1:C7)', '=SUM(D1:D7)', '=SUM(E1:E7)', '=SUM(F1:F7)', '=SUM(G1:G7)', '=SUM(H1:H7)', '=SUM(I1:I7)'],
      ['2023-01-24', '=SUM(C3:I3)', 300, 310, 100, 50, 20, 30, 0]
    ],
    columns: [
      {
        type: "calendar",
        mask: dateMask,
        title: "Date"
      },
      {
        type: "number",
        title: "Total Sales",
        locale: locale,
        options: currencyMast,
        readOnly: true
      },
      {
        type: "number",
        title: "Food",
        locale: locale,
        options: currencyMast
      },
      {
        type: "number",
        title: "Liquor",
        locale: locale,
        options: currencyMast
      },
      {
        type: "number",
        title: "Beer",
        locale: locale,
        options: currencyMast
      },
      {
        type: "number",
        title: "Wine",
        locale: locale,
        options: currencyMast
      },
      {
        type: "number",
        title: "N/A Bev",
        locale: locale,
        options: currencyMast
      },
      {
        type: "number",
        title: "MDSE",
        locale: locale,
        options: currencyMast
      },
      {
        type: "number",
        title: "GIFT CERT",
        locale: locale,
        options: currencyMast
      }
    ]
  }, {
    worksheetName: 'Comps',
    worksheetState: 'hidden',
    minDimensions: [dimensions.cols, dimensions.rows],
    data: [[90, 60, 80, '=SUM(A1:C1,Sales!B1)'], [800, 900, 7800, '=SUM(A2:C2,Sales!B2)']]
  }]
  const [allData, setAllData] = useState<any[]>(data);
  jspreadsheet.setLicense(
    'YjdkYTU5OWUxOGM2MzU4MTkyZmE3N2NiZTE5ZjRkMDAxNGZjMWI5Nzg4NWM2NjdlY2U5NmI5Y2I2OTc1YzE5YjM5NzQ1MjkyYzFmODE0MzczNjY4NmQxYjc5M2U3ZjE5NDhjMTlkMDViYTAyMWI2MjAzNmQ2OTM1MmE0YzlhYjEsZXlKdVlXMWxJam9pVTJoaGMyaGhibXNnVUdGdVkyaGhiQ0lzSW1SaGRHVWlPakUyTnpjeE9UWTRNREFzSW1SdmJXRnBiaUk2V3lJaUxDSnNiMk5oYkdodmMzUWlYU3dpY0d4aGJpSTZNQ3dpYzJOdmNHVWlPbHNpZGpjaUxDSjJPQ0lzSW5ZNUlsMTk='
  );

  const setReadOnlyCell = () => {
    console.log('jssRef.current => ', jssRef.current);
    // jssRef.current.setReadOnlyCell(0, 0, true);
  }

  jspreadsheet.setExtensions({ validations, render });

  const handleChangeValues = (worksheet: any, cell: any, col: any, row: any, value: any) => {
    let sheetName = worksheet.getWorksheetName();
    const editedSheetDataIndex = allData.findIndex((data: any) => data.worksheetName.toUpperCase() === sheetName);
    const editedSheetData = allData.find((data: any) => data.worksheetName.toUpperCase() === sheetName);
    editedSheetData.data[row][col] = value;
    let newArr = [
      ...allData.slice(0, editedSheetDataIndex),
      editedSheetData,
      ...allData.slice(editedSheetDataIndex + 1)
    ];
    setAllData(newArr);
  }

  let options: any = {
    tabs: true,
    worksheets: [{
      worksheetName: 'Sales',
      minDimensions: [dimensions.cols, dimensions.rows],
      data: [
        ['2023-01-23', 0, 20, 0, 0, 0, 0, 0, 0],
        ['2023-01-23', 0, 300, 310, 100, 50, 20, 30, 0],
        ['2023-01-24', 0, 300, 310, 100, 50, 20, 30, 0]
      ],
      columns: [
        { type: "calendar", title: "Date" },
        { type: "numeric", title: "Total Sales" },
        { type: "numeric", title: "Food", },
        { type: "numeric", title: "Liquor", },
        { type: "numeric", title: "Beer", },
        { type: "numeric", title: "Wine", },
        { type: "numeric", title: "N/A Bev", },
        { type: "numeric", title: "MDSE", },
        { type: "numeric", title: "GIFT CERT", },
      ]
    }, {
      worksheetName: 'Comps',
      minDimensions: [dimensions.cols, dimensions.rows],
      data: [[100, 200], [10, 20, 30]]
    }]
  }

  useEffect(() => {
    if (!jssRef.current.jspreadsheet) {
      spreadsheet.current = jspreadsheet(jssRef.current, {
        allowMoveWorksheet: false,
        allowDeleteWorksheet: false,
        allowRenameWorksheet: false,
        allowExport: false,
        tabs: false,
        editable: true,
        loadingSpin: true,
        onload: function (spreadsheet) {
          spreadsheet.openWorksheet(0);
          setReadOnlyCell();
        },
        worksheets: allData,
        onchange: handleChangeValues,
        oncomments: function () {
          console.log('oncomments', arguments);
        },
        license: 'Njg1YTU0ZTYwNDk1YmI5ZWViNWNiYmJhZWMwNjRlM2RiODA1Y2YwZTYzMGJjNjllZWFjODhjYjNmMzIyZWVlMjRmNzhmNzVkMmRlZWMzMDMyMTczMWQyODA1ZmIzYzM2ZWExYWVhOGUwYzUzMTVkNjI3MmJjMDVlMjA2OWVhNTMsZXlKdVlXMWxJam9pVTJoaGMyaGhibXNnVUdGdVkyaGhiQ0lzSW1SaGRHVWlPakUyTnpjeU9ETXlNREFzSW1SdmJXRnBiaUk2V3lKemNISmxZV1J6YUdWbGRDMTNhWFJvTFhKbFlXTjBMWFI1Y0dWelkzSnBjSFF1ZG1WeVkyVnNMbUZ3Y0NJc0lteHZZMkZzYUc5emRDSmRMQ0p3YkdGdUlqb3dMQ0p6WTI5d1pTSTZXeUoyTnlJc0luWTRJaXdpZGpraUxDSm1iM0p0ZFd4aElpd2labTl5YlhNaUxDSnlaVzVrWlhJaUxDSndZWEp6WlhJaUxDSnBiWEJ2Y25SbGNpSXNJblpoYkdsa1lYUnBiMjV6SWl3aVkyOXRiV1Z1ZEhNaUxDSnpaV0Z5WTJnaUxDSmphR0Z5ZEhNaVhYMD0=',
      });
    }
  }, [options]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <hr />
      <div>
        <div ref={jssRef} />
      </div>
    </div>
  )
}

export default App
