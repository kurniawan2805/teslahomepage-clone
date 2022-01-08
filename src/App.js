import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setdata] = useState({ hits: []});

  useEffect(() => {
    const fetchData =async () => {
      // const result =
      await axios.get(
        'https://hn.algolia.com/api/v1/search?query=react',
      ).then(res => {
        // console.log(res);
        setdata(res.data);
      }).catch(err => {
        console.log("Err: ", err);
      })
      // setdata(result.data);
    };
    fetchData();
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <ul>
        {data.hits.map(item => {
          return (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a> by {item.author}
          </li>
          );
        })}     
      </ul>
    </div>
  );
}

export default App;
