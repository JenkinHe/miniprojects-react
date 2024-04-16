
import Tabs from "./tabs";

function RandomComponent() {
    return <h1>random</h1>
}


export default function TabTest() {
    const tabs = [
        {
            label: 'Tab 1',
            content: <div>content for tab1</div>
        },
        {
            label: 'Tab 2',
            content: <div>content for tab2</div>
        },
        {
            label: 'Tab 3',
            content: <div>content for tab3</div>
        },
        {
            label: 'Tab 4',
            content: <RandomComponent></RandomComponent>
        }


    ]

    function handleChange(currentTabIndex) {

    }

    return <Tabs tabsContent={tabs} onChange={handleChange} />
}