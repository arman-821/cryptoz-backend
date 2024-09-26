
import React, { createContext, useContext, useState, ReactNode } from 'react';
export const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'About', href: '#', current: false },
  ]

type navigationTypes='Home'|'Team'|'About';
interface StateContextProps {
    route: navigationTypes;
    setRoute: React.Dispatch<React.SetStateAction<any>>;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

export const RouteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [route, setRoute] = useState<navigationTypes>('Home');

    return (
        <StateContext.Provider value={{ route, setRoute }}>
            {children}
        </StateContext.Provider>
    );
};

export const useRouterContext = () => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
};