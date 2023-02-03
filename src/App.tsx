import './App.css';
import Layout from './components/layout';
import { BrowserRouter as Router } from 'react-router-dom';

// https://jspreadsheet.com/v9/docs/cells

function App() {
  return (
    <>
      <div className="App spreadsheet-app">
        <div className="header-title-div">
          <h3 className="header-title-h3">The BrassTap</h3>
        </div>
        <section className="main-section">
        </section>
      </div>
      <Router>
        <Layout />
      </Router>
    </>
  );
}

export default App
