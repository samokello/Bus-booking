import {createContext, useState} from 'react';

export const Context = createContext();

const BusContext = ({children})=>{
    const [singleBus, setSingleBus] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fetchData, setFetchData] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState([]);
    const [totalPrice, setTotalPrice]=useState("");
    

    return (
<Context.Provider value={{busState:[singleBus, setSingleBus], loader:[loading, setLoading], busData:[fetchData, setFetchData], selected : [selectedSeat, setSelectedSeat], total:[totalPrice, setTotalPrice]}}>
    {children}
</Context.Provider>
    )
}

export default BusContext;