import React from 'react';
import GenerateData from './Components/GenarateData';
import MainLayout from './UI';
import Home from './Pages/Home';
import { useRouterContext } from './Hooks/RouteManager';
import About from './Pages/About';
import Team from './Pages/Team';

const App = () => {
  const {route} = useRouterContext();
    return (
     <MainLayout>
    {
      route==='Home' ? 
      <Home/>
      :
      route==='Team'?
      <>
     <Team/>
      </>
      :
      route==='About'?
      <>
     <About/>
     </>
      :
      
      <>
      
      </>
    }
     </MainLayout>
    );
};

export default App;
