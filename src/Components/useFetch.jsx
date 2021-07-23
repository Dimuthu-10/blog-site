import  { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok){
                throw Error ('Could not fetch the data correctly');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setPending(false);
            setError(null);
        })
        .catch(err => {
            setError(err.message);
            setPending(false);
        });
    }, [url])

    return ( 
        {data, pending, error}
     );
}
 
export default useFetch;