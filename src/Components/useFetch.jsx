import  { useEffect, useState } from 'react'



const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {

        const abrt = new AbortController();

        fetch(url,{ signal:abrt.signal })
            .then(res => {
                if (!res.ok){
                    throw Error ('could not fetch data correctly');
                }
                return res.json();
            })
            .then(data => {
                setPending(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('Fetch Aborted')
                }
                else{
                    setPending(false);
                    setError(err.message);
                }
            });
            return () => abrt.abort();
    }, [url])

    return ( 
        {data, pending, error}
     );
}
 
export default useFetch;