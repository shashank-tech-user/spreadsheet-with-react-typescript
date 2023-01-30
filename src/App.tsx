import { useEffect, useRef, useState } from "react";
import jspreadsheet from "jspreadsheet";
import { render } from "@jspreadsheet/render";
import { ColsIndex, data, HeadingColumnIndex, RowsIndex } from "./constant";
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";
import './App.css';

// https://jspreadsheet.com/v9/docs/cells

function App() {
  const jssRef: any = useRef(null);
  const spreadsheet: any = useRef(null);
  const [dimensions, setDimenstions] = useState({
    rows: 2,
    cols: 10
  })
  const [allData, setAllData] = useState<any[]>(data);
  jspreadsheet.setLicense(
    'YjdkYTU5OWUxOGM2MzU4MTkyZmE3N2NiZTE5ZjRkMDAxNGZjMWI5Nzg4NWM2NjdlY2U5NmI5Y2I2OTc1YzE5YjM5NzQ1MjkyYzFmODE0MzczNjY4NmQxYjc5M2U3ZjE5NDhjMTlkMDViYTAyMWI2MjAzNmQ2OTM1MmE0YzlhYjEsZXlKdVlXMWxJam9pVTJoaGMyaGhibXNnVUdGdVkyaGhiQ0lzSW1SaGRHVWlPakUyTnpjeE9UWTRNREFzSW1SdmJXRnBiaUk2V3lJaUxDSnNiMk5oYkdodmMzUWlYU3dpY0d4aGJpSTZNQ3dpYzJOdmNHVWlPbHNpZGpjaUxDSjJPQ0lzSW5ZNUlsMTk='
  )

  jspreadsheet.setExtensions({ render });

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

  const handleReadOnlyCells = (worksheet: any, cell: any, col: any, row: any, value: any) => {
    // console.log('worksheet => ', worksheet.getWorksheetId())
    if (worksheet.getWorksheetName() === 'SALES') {
      if (HeadingColumnIndex.includes(col) && row === 0) {
        cell.classList.add('readonly');
        return;
      }

      if (RowsIndex.includes(row) && ColsIndex.includes(col)) {
        cell.classList.add('readonly');
        return;
      }
    }
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
        },
        worksheets: allData,
        onchange: handleChangeValues,
        updateTable: handleReadOnlyCells,
        oncomments: function () {
          console.log('oncomments', arguments);
        },
        license: 'Njg1YTU0ZTYwNDk1YmI5ZWViNWNiYmJhZWMwNjRlM2RiODA1Y2YwZTYzMGJjNjllZWFjODhjYjNmMzIyZWVlMjRmNzhmNzVkMmRlZWMzMDMyMTczMWQyODA1ZmIzYzM2ZWExYWVhOGUwYzUzMTVkNjI3MmJjMDVlMjA2OWVhNTMsZXlKdVlXMWxJam9pVTJoaGMyaGhibXNnVUdGdVkyaGhiQ0lzSW1SaGRHVWlPakUyTnpjeU9ETXlNREFzSW1SdmJXRnBiaUk2V3lKemNISmxZV1J6YUdWbGRDMTNhWFJvTFhKbFlXTjBMWFI1Y0dWelkzSnBjSFF1ZG1WeVkyVnNMbUZ3Y0NJc0lteHZZMkZzYUc5emRDSmRMQ0p3YkdGdUlqb3dMQ0p6WTI5d1pTSTZXeUoyTnlJc0luWTRJaXdpZGpraUxDSm1iM0p0ZFd4aElpd2labTl5YlhNaUxDSnlaVzVrWlhJaUxDSndZWEp6WlhJaUxDSnBiWEJ2Y25SbGNpSXNJblpoYkdsa1lYUnBiMjV6SWl3aVkyOXRiV1Z1ZEhNaUxDSnpaV0Z5WTJnaUxDSmphR0Z5ZEhNaVhYMD0=',
      });
      spreadsheet.current.map((current: any, index: number) => current.element.classList.add(`spreadsheet_${index + 1}`));
    }
  }, [allData, spreadsheet]);

  return (
    <div className="App">
      <h3>The BrassTap</h3>
      <hr />
      <section className="main-section">
        <div className="section">
          <div ref={jssRef} />
        </div>
      </section>
    </div>
  )
}

export default App
