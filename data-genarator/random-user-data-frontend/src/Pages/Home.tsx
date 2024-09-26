import React from 'react'
import HomeAnimation from '../Assets/Animations/HomeAnimation.json'
import Lottie from 'react-lottie-player'
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react'
import axios from 'axios';
export default function Home() {
    const [additionalSettingsOn, setAdditionalSettingsOn] = React.useState(false);
    const [count, setCount] = React.useState(10);
   
    const handleGenerate = () => {
        axios.post(`http://localhost:3001/generate?count=${count}`, {
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
    <div className=''>
<div className="max-w-[85rem] min-h-[90vh] items-center flex mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
    <div className="lg:col-span-3">
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">Genarate Random Details</h1>
      <p className="mt-3 text-lg text-gray-800">Get Some Random User Data</p>

      <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <div className="w-full sm:w-auto flex flex-col gap-5">
         <div className="">
         <label htmlFor="count" className="block text-sm font-medium text-gray-800">Number of Users</label>
            <input
            onChange={(e)=>setCount(parseInt(e.target.value))}
            value={count}
            type="number" id="count" name="count" className="mt-1 block w-full sm:w-36 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="10"/>
            </div>
          
         
                
        </div>
      
      
      </div>
      <div className="w-full sm:w-auto">
        <button onClick={handleGenerate} className="mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Generate Data</button>
        </div>

    </div>

    <div className="lg:col-span-4 mt-10 lg:mt-0 flex justify-center items-center">
    <Lottie
      loop
      animationData={HomeAnimation}
      play
      style={{ width: 300, height: 300 }}
    />
    </div>
  </div>
</div>
      
    </div>
  )
}
