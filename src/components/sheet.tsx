import React, { DOMElement } from 'react';
import { useEffect, useRef, useState } from "react";
import jspreadsheet from "jspreadsheet";
import { render } from "@jspreadsheet/render";
import { data } from "./constant";
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";
import { useReadonlyHooks } from "./useReadonlyHook";
import { socketConnection } from './socket';

jspreadsheet.setExtensions({ render });

const Sheet: React.FC = () => {
  const socket = socketConnection.socket;
  const { readonlyData } = useReadonlyHooks();
  const jssRef: any = useRef(null);
  const spreadsheet: any = useRef(null);
  const [allData, setAllData] = useState<any[]>(data);

  //On First Render Build the dummy data and configuration
  useEffect(() => {
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
      license: 'Njg1YTU0ZTYwNDk1YmI5ZWViNWNiYmJhZWMwNjRlM2RiODA1Y2YwZTYzMGJjNjllZWFjODhjYjNmMzIyZWVlMjRmNzhmNzVkMmRlZWMzMDMyMTczMWQyODA1ZmIzYzM2ZWExYWVhOGUwYzUzMTVkNjI3MmJjMDVlMjA2OWVhNTMsZXlKdVlXMWxJam9pVTJoaGMyaGhibXNnVUdGdVkyaGhiQ0lzSW1SaGRHVWlPakUyTnpjeU9ETXlNREFzSW1SdmJXRnBiaUk2V3lKemNISmxZV1J6YUdWbGRDMTNhWFJvTFhKbFlXTjBMWFI1Y0dWelkzSnBjSFF1ZG1WeVkyVnNMbUZ3Y0NJc0lteHZZMkZzYUc5emRDSmRMQ0p3YkdGdUlqb3dMQ0p6WTI5d1pTSTZXeUoyTnlJc0luWTRJaXdpZGpraUxDSm1iM0p0ZFd4aElpd2labTl5YlhNaUxDSnlaVzVrWlhJaUxDSndZWEp6WlhJaUxDSnBiWEJ2Y25SbGNpSXNJblpoYkdsa1lYUnBiMjV6SWl3aVkyOXRiV1Z1ZEhNaUxDSnpaV0Z5WTJnaUxDSmphR0Z5ZEhNaVhYMD0=',
    });
    spreadsheet.current.map((current: {
      element: {
        classList: {
          add: (arg0: string) => void;
        };
      };
    }, index: number) => current.element.classList.add(`spreadsheet_${index + 1}`));

    return () => {
      jspreadsheet.destroy(jssRef.current);
    }
  }, [allData]);

  const handleChangeValues = (
    worksheet: { getWorksheetName: () => void; },
    cell: HTMLElement,
    col: number,
    row: number,
    value: string | number
  ) => {
    let sheetName = worksheet.getWorksheetName();
    const editedSheetDataIndex = allData.findIndex((data) => data.worksheetName.toUpperCase() === sheetName);
    const editedSheetData = allData.find((data) => data.worksheetName.toUpperCase() === sheetName);
    editedSheetData.data[row][col] = value;
    let newArr = [
      ...allData.slice(0, editedSheetDataIndex),
      editedSheetData,
      ...allData.slice(editedSheetDataIndex + 1)
    ];
    setAllData(newArr);
    socket.emit('sendMessage', { value, row, col, sheetName });
  }

  const handleReadOnlyCells = (
    worksheet: { getWorksheetName: () => void; },
    cell: HTMLElement,
    col: number,
    row: number
  ) => {
    readonlyData(worksheet, cell, col, row);
  }

  useEffect(() => {
    socket.on('message', (message: {
      data: string,
      row: number,
      col: number,
      name: string
    }) => {
      const editedSheetDataIndex = allData.findIndex((data) => data.worksheetName.toUpperCase() === message.name);
      const editedSheetData = allData.find((data) => data.worksheetName.toUpperCase() === message.name);
      editedSheetData.data[message.row][message.col] = message.data;
      setAllData([
        ...allData.slice(0, editedSheetDataIndex),
        editedSheetData,
        ...allData.slice(editedSheetDataIndex + 1)
      ]);
    });
  }, []);

  return (
    <div className="section">
      <div ref={jssRef} />
    </div>
  )
}

export default Sheet