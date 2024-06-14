import React from "react";
import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data";
function App() {
  return (
    <>
      <Header batchName='PNC batch 2024' ></Header>

      <main className="scores-container">
        <Scores courseName="HTML" results={HTML_RESULTS} />
        <Scores courseName="PYTHON" results={PYTHON_RESULTS} />
        <Scores courseName="JAVA" results={JAVA_RESULTS} />
        <Scores courseName="ENGLISH" results={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;

