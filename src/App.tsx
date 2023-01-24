import React, { useEffect, useRef, useState } from "react";
import reactLogo from './assets/react.svg'
import jspreadsheet from "jspreadsheet";
import { render } from "@jspreadsheet/render";
import './App.css';
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

// https://jspreadsheet.com/v9/docs/cells

function App() {
  const [dimensions, setDimenstions] = useState({
    rows: 2,
    cols: 10
  })
  const jssRef: any = useRef(null);
  const spreadsheet: any = useRef(null);
  jspreadsheet.setLicense(
    'YjdkYTU5OWUxOGM2MzU4MTkyZmE3N2NiZTE5ZjRkMDAxNGZjMWI5Nzg4NWM2NjdlY2U5NmI5Y2I2OTc1YzE5YjM5NzQ1MjkyYzFmODE0MzczNjY4NmQxYjc5M2U3ZjE5NDhjMTlkMDViYTAyMWI2MjAzNmQ2OTM1MmE0YzlhYjEsZXlKdVlXMWxJam9pVTJoaGMyaGhibXNnVUdGdVkyaGhiQ0lzSW1SaGRHVWlPakUyTnpjeE9UWTRNREFzSW1SdmJXRnBiaUk2V3lJaUxDSnNiMk5oYkdodmMzUWlYU3dpY0d4aGJpSTZNQ3dpYzJOdmNHVWlPbHNpZGpjaUxDSjJPQ0lzSW5ZNUlsMTk='
  );

  jspreadsheet.setExtensions({ render });

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
      spreadsheet.current = jspreadsheet(jssRef.current, options);
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
