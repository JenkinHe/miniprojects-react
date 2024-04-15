import { useEffect, useState } from "react"

export default function ScrollIndicator({url}){
    const [data,setData]= useState([]);
    const [loading,setLoading]= useState(false);
    const [errorMsg,setErrorMsg] = useState('');
    async function fetchData(getUrl){
        try{
            setLoading(true);
            const response =await fetch(getUrl);
            const data =await response.json();
            

            if(data&& data.products&& data.products.length>0){
                setData(data.products);
                setLoading(false);
            }

        }catch(e){
            console.log(e);
            setErrorMsg(e.message);
        }

    }
    
    useEffect(()=>{
        fetchData(url);
    },[url]);

    return <div>
        <h1>Custom Scroll Indicator</h1>
        <div className="data-container">
            {
                data&&data.length>0?
                data.map(dataitem=><p>{dataitem.title}</p>):
                null
            }

        </div>
    </div>
}