import {useEffect,useState } from "react";

function useCurrencyInfo() {
const[data,setData] = useState({})
    useEffect(() => {
        fetch("https://api.exchangerate-api.com/v4/latest/USD")
            .then((res) => res.json())
            .then((res) => setData(res[currency]));
    }, [currency]);
    console.log(data);
    return data
    
}
export default useCurrencyInfo;