import './App.css';
import { useEffect, useState } from 'react';
import Papa from "papaparse";

//hooks

//https://pypi.org/project/storygraph-api/

//reading storygraph output
const CsvReader = () => {
  //where csv is stored
  const [csvData, setCsvData] = useState([]);
//useEffect runs when component loads
  useEffect(() => {
    console.log("Component mounted. Starting to fetch CSV...");
    //this fetches from the public folder
    fetch("46da598b0e9b803785d252058ba6021432e88c7e500f2555dbccf856f15cd623.csv")
      .then(response => {
        console.log("fetch response: ", response);
        return response.text()
      }) //convert it to plain text
      .then(csvText => {
        //see raw CSV
        console.log("CSV text received:");
        console.log(csvText); // See raw CSV text

        Papa.parse(csvText, {
          header: true, // if your CSV has headers
          skipEmptyLines: true,
          complete: (results) => {
            setCsvData(results.data); //results.data is array of row objects
          },
        });
      });
  }, []);

  return (
    <div>
      <h1>What's Mary Reading?</h1>
      <ul>
        {csvData.map((row, index) => (
          <li key={index}>{JSON.stringify(row)}</li>
        ))}
      </ul>
    </div>
  );
};

export default CsvReader;



