import {useEffect, useState} from 'react';


// Custom hook to fetch the data through the API

export const useGet = () => {
    const[error,seterror] = useState('');
    const[data,setdata]=useState('');
    const[ispending,setispending]=useState(false);

    useEffect(() => {
        const fetchdata = async () => {
             setispending(true);
             try{
                const response = await fetch('https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json')
                if(!response.ok) throw new Error(response.statusText);
                const json=await response.json();
                setispending(false);
                setdata(json?.appointments);
                seterror(false); 
             }

             catch(error){
                 seterror(`${error} data could not be fetched : ${error.message}`);
                 setispending(false);
             }
        }
        fetchdata(); 
    },[])

    console.log(data);

    return{data,ispending,error};

}