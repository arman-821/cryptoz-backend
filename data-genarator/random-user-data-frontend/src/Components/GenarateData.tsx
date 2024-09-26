import React, { useState } from 'react';
import axios from 'axios';

const GenerateData = () => {
    const [count, setCount] = useState(10);

    const handleGenerate = () => {
        axios.get(`http://localhost:3001/generate?count=${count}`, {
            responseType: 'blob'
        })
        .then((response:any) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'users.csv');
            document.body.appendChild(link);
            link.click();
        })
        .catch((error:any) => {
            console.error('Error generating data:', error);
        });
    };

    return (
        <div>
            <h1>Random User Data Generator</h1>
            <input
                type="number"
                value={count}
                onChange={(e:any) => setCount(e.target.value)}
                min="1"
            />
            <button onClick={handleGenerate}>Generate Data</button>
        </div>
    );
};

export default GenerateData;
