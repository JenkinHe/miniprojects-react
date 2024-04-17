import { useRef } from "react";


export default function ScrollToSection() {

    const ref=useRef();

    const data = [
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            label: 'second Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'grey'
            }
        },
        {
            label: 'third Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: 'fourth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            label: 'fifth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'orange'
            }
        },
    ]

    function handleScrollToSection(){
        let pos=ref.current.getBoundingClientRect().top

        window.scrollTo({
            top:pos,
            behavior:"smooth"
        })
    }


    return <div>
        <h1>Scroll to section</h1>
        <button onClick={handleScrollToSection}>click to scroll</button>
        {
            data.map((dataItem,index)=><div ref={index===3?ref:null} style={dataItem.style}>
                <h3>{dataItem.label}</h3>

            </div>)
        }
    </div>
}