import {useRef, useState } from "react"
import useOutsideClick from ".";



export default function UseOnclickOutsideTest() {
    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false))

    const [showContent, setShowContent] = useState(false);


    return <div>
        {
            showContent ? <div ref={ref}>
                <h1>random content</h1>
                <p>click outside to close</p>

            </div> : <button onClick={() => setShowContent(true)}>show content</button>
        }

    </div>
}