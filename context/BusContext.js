import {createContext, useState} from 'react';

export const Context = createContext();

const BusContext = ({children})=>{
    const [singleBus, setSingleBus] = useState(null);
    return (
<Context.Provider value={{busState:[singleBus, setSingleBus]}}>
    {children}
</Context.Provider>
    )
}

export default BusContext;