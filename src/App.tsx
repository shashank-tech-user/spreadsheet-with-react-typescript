import React, { useEffect, useRef, useState } from "react";
import reactLogo from './assets/react.svg'
import jspreadsheet from "jspreadsheet";
import { render } from "@jspreadsheet/render";
import './App.css';
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

function App() {
  const [dimensions, setDimenstions] = useState({
    rows: 6,
    cols: 10
  })
  const jssRef: any = useRef(null);
  const spreadsheet: any = useRef(null);
  jspreadsheet.setLicense(
    'ZTYyMTQ4MjY3MTAwYjFhOTBmMjIwY2UwYTdjMWIyZTczYWQ4MWFlYzFkYzZlNDYzZWY0ZTExOWE0Mjg4NmIyNTI1ZWU2ZmVmZDgwMjU4NDVhNGYxY2U4ZjYzZGZjNGU3OGRjNjA3NjdkNDVmZTUyMjkwOTlkM2ViY2M2NTQ0MjksZXlKdVlXMWxJam9pU25Od2NtVmhaSE5vWldWMElpd2laR0YwWlNJNk1UWTVOVGMyT1RJd01Dd2laRzl0WVdsdUlqcGJJbXB6YUdWc2JDNXVaWFFpTENKcWMzQnlaV0ZrYzJobFpYUXVZMjl0SWl3aVkzTmlMbUZ3Y0NJc0luTmhiM0p2WTJzdVkyOXRJaXdpZFdVdVkyOXRMbUp5SWl3aWRXNXBkR1ZrTG1Wa2RXTmhkR2x2YmlJc0ltTnZaR1Z6WVc1a1ltOTRMbWx2SWl3aWJHOWpZV3hvYjNOMElsMHNJbkJzWVc0aU9pSXpNU0lzSW5OamIzQmxJanBiSW5ZM0lpd2lkamdpTENKMk9TSXNJbVp2Y20xeklpd2labTl5YlhWc1lTSXNJbkpsYm1SbGNpSXNJbkJoY25ObGNpSXNJbWx0Y0c5eWRHVnlJaXdpZG1Gc2FXUmhkR2x2Ym5NaUxDSmpiMjF0Wlc1MGN5SXNJbk5sWVhKamFDSXNJbU5vWVhKMGN5SXNJbU5zYjNWa0lpd2lZbUZ5SWl3aWNISnBiblFpTENKdFlYTnJJaXdpYzJobFpYUnpJbDE5'
  );

  jspreadsheet.setExtensions({ render });

  useEffect(() => {
    if (!jssRef.current.jspreadsheet) {
      spreadsheet.current = jspreadsheet(jssRef.current, {
        tabs: true,
        worksheets: [{
          minDimensions: [dimensions.rows, dimensions.cols],
          data: [['2023-01-23', 0, 20, 0, 0, 0, 0, 0, 0], ['2023-01-23', 0, 300, 310, 100, 50, 20, 30, 0]],
          columns: [
            { type: "calendar", title: "Date", },
            { type: "numeric", title: "Total Sales", },
            { type: "numeric", title: "Food", },
            { type: "numeric", title: "Liquor", },
            { type: "numeric", title: "Beer", },
            { type: "numeric", title: "Wine", },
            { type: "numeric", title: "N/A Bev", },
            { type: "numeric", title: "MDSE", },
            { type: "numeric", title: "GIFT CERT", },
          ]
        }, {
          minDimensions: [dimensions.rows, dimensions.cols],
          data: [[100, 200], [10, 20, 30]]
        }]
      })
    }
  }, []);

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
        <div ref={jssRef}></div>
        <div>Add Column</div>
      </div>
      <div>Add Row</div>
    </div>
  )
}

export default App
