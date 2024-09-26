import React from 'react'
import { useRouterContext } from '../Hooks/RouteManager';

export default function Footer() {
  const {route, setRoute} = useRouterContext();
  return (


<footer className="  shadow bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm  sm:text-center text-gray-400">© 2024 <a href="/" className="hover:underline">Tech ZIG</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium  text-gray-400 sm:mt-0">
        <li>
            <a onClick={
              ()=>{

             setRoute('Home')
              } 
            } className="hover:underline cursor-pointer me-4 md:me-6">Home</a>
        </li>
        <li>
            <a  onClick={
              ()=>{

             setRoute('Team')
              } 
            }  className="hover:underline cursor-pointer me-4 md:me-6">Team</a>
        </li>
        <li>
            <a onClick={
              ()=>{

             setRoute('About')
              } 
            } className="hover:underline cursor-pointer me-4 md:me-6">About</a>
        </li>
     
   
    </ul>
    </div>
</footer>

  )
}
