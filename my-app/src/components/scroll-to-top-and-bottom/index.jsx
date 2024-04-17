
import useFetch from "../use-fetch";
import { useRef } from "react";



export default function ScrollToTopAndBottom(){

    const {data,error,pending} = useFetch('https://dummyjson.com/products?limit=100',{});

    function handleScrollToTop(){
        window.scrollTo({
            top:0,left:0,behavior:'smooth',
        });

    }
    function handleScrollToBottom(){
        bottomRef.current.scrollIntoView({behavior:"smooth"});
    }


    const bottomRef =useRef(null);


    if(pending){
        return <h1>loading</h1>
    }

    if(error){
        return <h1>error</h1>
    }

    return <div>
        <h1>Scroll to top and bottom feature</h1>
        <h3>this is top section</h3>
        <button onClick={handleScrollToBottom}> scroll to bottom</button>
        <ul style={{listStyle:'none'}}>
            {
                data&&data.products&&data.products.length?
                data.products.map(item =><li>{item.title}</li>):
                null
            }
        </ul>
        <button onClick={handleScrollToTop}>Scroll to top</button>
        <div ref={bottomRef}></div>
        <h3> this is bottom of page</h3>
    </div>
}