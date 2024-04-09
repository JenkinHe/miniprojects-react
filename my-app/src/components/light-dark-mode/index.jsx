import useLocalStorage from "./useLocalStorage";



export default function LightDarkMode(){

    const [theme,setTheme]= useLocalStorage('theme',"dark");

    function handleToggleTheme(){
        setTheme(theme==='light'?'dark':'light');
    }

    return (<div className="light-dark-mode"data-theme={theme}>
        <div className="container">
            <p>hello world</p>
            <button onClick={handleToggleTheme}>change theme</button>
        </div>
    </div>
    );
}